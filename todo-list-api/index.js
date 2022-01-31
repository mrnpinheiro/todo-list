const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Todo = require('./todo');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.post('/todos', async (req, res) => {
	const text = req.body.text;

	const createdTodo = await Todo.create({
		text,
		isDone: false
	});

	return res.json(createdTodo);
});

app.get('/todos/:id', async (req, res) => {
	const id = req.params.id;

    const findTodo = await Todo.findOne({ _id: id }).exec();

  return res.json(findTodo);
});

app.get('/todos', async (req, res) => {
	const todos = await Todo.find({});

  return res.json(todos)
});

app.put('/todos/:id', async (req, res) => {
	const id = req.params.id;
	const text = req.body.text;
	const isDone = req.body.isDone;

	const findAndUpdateTodo = await Todo.findByIdAndUpdate(
		{ _id: id },
		{ text, isDone },
		{ new: true }
	).exec();

  return res.json(findAndUpdateTodo)
});

app.delete('/todos/:id', async (req, res) => {
	const id = req.params.id;

	const findAndDeleteTodo = await Todo.findByIdAndDelete({ _id: id }).exec();

  return res.json(findAndDeleteTodo)
});

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
	app.listen(port, () => {
		console.log(`App listening at http://localhost:${port}.`);
	});
});
