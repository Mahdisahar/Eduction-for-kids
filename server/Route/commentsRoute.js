const express = require('express');
const fs = require('fs');
const router = express.Router();
const { v4: uuid } = require("uuid");

function readcommentData() {
	const commentData = fs.readFileSync('./data/comment.json');
	const commentDataJson = JSON.parse(commentData);
	return commentDataJson;
  }

router.get('/', (req,res) => {
	const commentsData = readcommentData();
	res.status(200).send(commentsData);
});

router.post('/', (req, res) => {
	const commentsData = readcommentData();
	
	const newComment = {
		name: req.body.name ,
		comment: req.body.comment,
		id:uuid(),
		
	};
	commentsData.unshift(newComment);

	const writeData = JSON.stringify(commentsData);
	fs.writeFileSync('./data/comment.json', writeData);
	res.status(200).send(newComment);
});


module.exports = router;