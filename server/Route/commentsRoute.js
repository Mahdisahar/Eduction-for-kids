const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/comment', (req,res) => {
	const readData = fs.readFileSync('./data/comment.json');
	const readDataJson = JSON.parse(readData);
	res.status(200).send(readDataJson);
});

router.post('/comment', (res, req) => {
	const readData = fs.readFileSync('./data/comment.json');
	const readDataJson = JSON.parse(readData);
	res.status(200).send(readDataJson);

	const newComment = {
		name: req.body.name ,
		comment: req.body.comment,
	};

	const writeData = JSON.stringify(readData);
	res.status|(200).send(writeData);
});


module.exports = router;