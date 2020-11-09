'use strict';
// catRoute
const express = require('express');
const catController = require('../controllers/catController');

const router = express.Router();

router.get('/', catController.cat_list_get);

router.get('/:id',(req, res) => {
  console.log('catRoute: http get cat with path param', req.params);
  res.send(`From this endpoint you can get cat with id ${req.params.id}.`);
});

module.exports = router;