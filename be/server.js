const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;
const app = express();

// We use these methods to parse the HTTP body
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))


app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use('/api/goals', require('./routes/goalRoutes'))

