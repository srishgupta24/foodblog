const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

//Route
app.get('/', (req, res) => {
	res.send('root route');
})

//Start
app.listen(port, (req, res) => {
	console.log(`server listening on port: ${port}`);
})
