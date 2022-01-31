const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const apiRouter = require('./routers');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use('/api', apiRouter);

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
	app.listen(port, () => {
		console.log(`App listening at http://localhost:${port}.`);
	});
});
