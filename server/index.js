const express = require('express')
const cors = require('cors');

const app = express();

require('dotenv').config({path: './.env'});

// loading variable from .env
const PORT = process.env.PORT;

const lessonRoute = require('./Route/lessonRoute');
const commentsRouter = require('./Route/commentsRoute');
// Middleware setup

app.use(express.static('public'));
app.use(cors());
app.use(express.json());


app.use('/lesson', lessonRoute);
app.use('/comment', commentsRouter);

app.listen(PORT, ()=> {
	console.log(`Server is running on Port: ${PORT}`);
});

