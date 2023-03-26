const express = require('express');
const {
  getAllPost,
  getImages,
  getVideos,
  createPost,
} = require('../controllers/post.controller');
const router = express.Router();

router.get('/post', getAllPost);
router.get('/image', getImages);
router.get('/video', getVideos);
router.post('/post', createPost);

module.exports = router;
