'use strict';

const express = require('express');
const {body} = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.user_list_get);
router.post('/',
    [
      body('name', 'minimum length 3 characters').isLength({min: 3}),
      body('email', 'is not a valid email').isEmail(),
      body('passwd',
          'minimum length 8 characters, at least one capital letter').
          matches('(?=.*[A-Z]).{8,}'),
    ],
    userController.user_create);

router.get('/:id', userController.user_get_by_id);
router.put('/:id', userController.user_update);
router.delete('/:id', userController.user_delete);

module.exports = router;
