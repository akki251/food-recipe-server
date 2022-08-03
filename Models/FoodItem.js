const mongoose = require('mongoose');

const FoodItemSchema = mongoose.Schema({
  name: String,
  image: {
    type: String,
  },

  category: {
    type: String,
    default: 'others',
  },
  Author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Author',
  },
  ingredients: [String],
});

const FoodItem = mongoose.model('FoodItem', FoodItemSchema);

module.exports = FoodItem;
