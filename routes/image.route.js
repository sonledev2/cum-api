const express = require('express');
const {
  getAllImage,
  getImages,
  getVideos,
  createImage,
} = require('../controllers/post.controller');
const router = express.Router();

router.get('/post', getAllImage);
router.get('/image', getImages);
router.get('/video', getVideos);
router.post('/post', createImage);

module.exports = router;
