const FoodItem = require('../Models/FoodItem');
const catchAsync = require('../utils/catchAsync');
module.exports.addRecipe = catchAsync(async (req, res, next) => {
  const newFoodObj = await FoodItem.create(req.body);

  res.status(200).json({
    status: 'Success',
    data: newFoodObj,
  });
});

module.exports.updateRecipe = catchAsync(async (req, res, next) => {
  const updatedRecipe = await FoodItem.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: 'Success',
    data: {
      updatedRecipe,
    },
  });
});
module.exports.getRecipes = catchAsync(async (req, res, next) => {
  const items = await FoodItem.find();

  res.status(200).json({
    status: 'success',
    data: items,
  });
});

module.exports.getRecipe = catchAsync(async (req, res, next) => {
  const recipe = await FoodItem.findOne({ _id: req.params.id });

  res.status(200).json({
    status: 'success',
    data: recipe,
  });
});

module.exports.deleteRecipe = catchAsync(async (req, res, next) => {
  await FoodItem.deleteOne({ _id: req.params.id });

  res.status(201).json({
    status: 'success',
    message: 'recipe deleted',
  });
});
