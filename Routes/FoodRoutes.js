const express = require('express');
const {
  getRecipes,
  addRecipe,
  getRecipe,
  deleteRecipe,
  updateRecipe,
} = require('../Controllers/FoodController');

const FoodItem = require('../Models/FoodItem');
const catchAsync = require('../utils/catchAsync');

const router = express.Router();

router.get('/recipes', getRecipes).post('/addRecipe', addRecipe);

router.route('/recipes/:id').get(getRecipe).delete(deleteRecipe).put(updateRecipe);

module.exports = router;
