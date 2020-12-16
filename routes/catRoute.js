'use strict';
// catRoute
const express = require('express');
const {body} = require('express-validator');
const multer = require('multer');
const catController = require('../controllers/catController');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const injectFile = (req, res, next) => {
  if(req.file) {
    req.body.type = req.file.mimetype;
  }
  console.log('inject', req.body);
  next();
}

router.get('/', catController.cat_list_get);
router.post('/',
    upload.single('cat'),
    injectFile,
    [
      body('name', 'cannot be empty').isLength({min: 2}),
      body('age', 'must be filled').isLength({min: 1}).isNumeric(),
      body('weight','must be a number').isLength({min: 1}).isNumeric(),
      body('owner', 'required').isLength({min: 1}).isNumeric(),
      body('type', 'not image').contains('image'),
    ],

    catController.cat_create);

router.get('/:id',catController.cat_get_by_id);
router.put('/', catController.cat_update);
router.delete('/:id', catController.cat_delete);

module.exports = router;