'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = async (req, res) => {
  console.log('catController: http get cat with path param', req.params);
  const cat = await catModel.getCat(req.params.id);
    res.json(cat);
};

const cat_create = async (req, res) => {
  // here we will create aat with  data coming from req..
  console.log('catController cat_create', req.body, req.file);
  const id = await catModel.insertCat(req)
  const cat = await catModel.getCat(id);
  res.send(cat);
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create,
};