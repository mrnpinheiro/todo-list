const Todo = require('../models/todo.model')

const todoService = {
	create: async (text) => {
		const createdTodo = await Todo.create({
			text,
			isDone: false
		});
		return createdTodo;
	},

	findById: async (id) => {
		const todo = await Todo.findOne({ _id: id }).exec();
		return todo;
	},

	find: async () => {
		const todo = await Todo.find({});
		return todo;
	},

	updateById: async (id, text, isDone) => {
		const todo = await Todo.findByIdAndUpdate(
			{ _id: id },
			{ text, isDone },
			{ new: true }
		).exec();

		return todo;
	},

	deleteById: async (id) => {
		const todo = await Todo.findByIdAndDelete({ _id: id }).exec();
		return todo;
	}
}

module.exports = todoService;
