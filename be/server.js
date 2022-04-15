const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;

const app = express();

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/api/goals', (req, res) => {
	res.json(
		{
				message: 'Hello World!'
		}
	);
})
