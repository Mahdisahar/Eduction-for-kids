const express = require('express');
const router = express.Router(); 
const fs = require('fs');

// Read data from JSON file
router.get('/', (req,res) => {
	const readData = fs.readFileSync('./data/lesson.json');
	const readDataJson = JSON.parse(readData);
	res.status(200).send(readDataJson);
});


module.exports = router;