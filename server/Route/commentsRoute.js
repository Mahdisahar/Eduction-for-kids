const express = require('express');
const fs = require('fs');
const router = express.Router();
const { v4: uuid } = require('uuid');

function readcommentData() {
  try {
    const commentData = fs.readFileSync('./data/comment.json');
    const commentDataJson = JSON.parse(commentData);
    return commentDataJson;
  } catch (error) {
    console.log('Error reading or parsing comment data', error);
    return [];
  }
}

router.get('/', (req, res) => {
  const commentsData = readcommentData();
  res.status(200).send(commentsData);
});

router.post('/', (req, res) => {
  const commentsData = readcommentData();

  const newComment = {
    name: req.body.name,
    comment: req.body.comment,
    id: uuid(),
    image: 'commentimage.png',
    timestamp: Date.now(),
  };
  commentsData.unshift(newComment);

  const writeData = JSON.stringify(commentsData);
  fs.writeFileSync('./data/comment.json', writeData);
  res.status(200).send(newComment);
});

router.delete('/:id', (req, res) => {
  const commentId = req.params.id;
  let commentsData = readcommentData();

  const index = commentsData.findIndex((comment) => comment.id === commentId);
  if (index !== -1) {
    commentsData.splice(index, 1);
    fs.writeFileSync('./data/comment.json', JSON.stringify(commentsData));
    res.status(200).json({
      message: 'Comment deleted successfully',
    });
  } else {
    res.status(404).json({
      message: 'Comment not found',
    });
  }
});

module.exports = router;
