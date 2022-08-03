const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorController = require('./utils/errorController.js');
const app = express();

const foodRoutes = require('./Routes/FoodRoutes');
//  database connection
require('./DatabaseConfig/mongoose.js');

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Food Recipe Api',
    status: 'success',
  });
});

app.use('/api', foodRoutes);
app.use(errorController);

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`SERVER RUNNING ON ${port} 😊`);
});
