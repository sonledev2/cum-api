const express = require('express');
const { getAllImage, createImage } = require('../controllers/post.controller');
const router = express.Router();

router.get('/post', getAllImage);
router.post('/post', createImage);

module.exports = router;
