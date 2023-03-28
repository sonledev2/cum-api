const express = require('express');
const {
  getAllPost,
  getImages,
  getVideos,
  createPost,
  deletePost,
} = require('../controllers/post.controller');
const router = express.Router();

router.get('/post', getAllPost);
router.get('/image', getImages);
router.get('/video', getVideos);
router.post('/post', createPost);
router.delete('/post', deletePost);

module.exports = router;
