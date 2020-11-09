'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_create = (req, res) => {
  // here we will create aat with  data coming from req..
  res.send(`cat created with id: ...`);
};

module.exports = {
  cat_list_get,
  cat_create,
};