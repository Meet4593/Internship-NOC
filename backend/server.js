const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health
app.get('/health', (_req, res) => {
	return res.json({ status: 'ok' });
});

// Routes
app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/submissions', require('./src/routes/submission.routes'));
app.use('/api/noc', require('./src/routes/noc.routes'));

// Mongo connection and server start
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/internship_noc';

async function start() {
	try {
		await mongoose.connect(MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	} catch (err) {
		console.error('Failed to start server', err);
		process.exit(1);
	}
}

start();

module.exports = app;

