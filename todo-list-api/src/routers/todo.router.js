const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo.controller')

router.post('/', todoController.create);

router.get('/:id', todoController.findById);

router.get('/', todoController.find);

router.put('/:id', todoController.updateById);

router.delete('/:id', todoController.deleteById);

module.exports = router;
