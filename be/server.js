const express = require('express');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db')
const colors = require('colors')
const port = process.env.PORT || 8080;
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware')

// Mongo connection
connectDb()

// We use these methods to parse the HTTP body
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

// routes
app.use('/api/goals', require('./routes/goalRoutes'))

// handle error
app.use(errorHandler)

// start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
