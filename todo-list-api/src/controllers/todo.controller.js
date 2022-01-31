const todoService = require('../services/todo.services')

const todoController = {
	create: async (req, res) => {
		const text = req.body.text;
		const createdTodo = await todoService.create(text);

		return res.json(createdTodo);
	},

	findById: async (req, res) => {
		const id = req.params.id;
		const findTodo = await todoService.findById(id);

		return res.json(findTodo);
	},

	find: async (req, res) => {
		const todos = await todoService.find();
		return res.json(todos)
	},

	updateById: async (req, res) => {
		const id = req.params.id;
		const text = req.body.text;
		const isDone = req.body.isDone;
		const findAndUpdateTodo = await todoService.updateById(id, text, isDone);

		return res.json(findAndUpdateTodo);
	},

	deleteById: async (req, res) => {
		const id = req.params.id;
		const findAndDeleteTodo = await todoService.deleteById(id);

		return res.json(findAndDeleteTodo);
	}
}

module.exports = todoController;
