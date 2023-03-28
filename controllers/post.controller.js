const { default: mongoose } = require('mongoose');
const Post = require('../models/post.model');

// const getAllImage = async (req, res) => {
//   try {
//     const imageList = await Image.find({});
//     return res.status(200).json(imageList);
//   } catch (error) {
//     throw new Error('Not Found Image List');
//   }
// };

const getAllPost = async (req, res) => {
  try {
    const random = await Post.aggregate([
      {
        $sample: { size: 50 },
      },
    ]);
    return res.status(200).json(random);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getImages = async (req, res) => {
  try {
    const images = await Post.find({
      type: 'image',
    });
    return res.status(200).json(images);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getVideos = async (req, res) => {
  try {
    const images = await Post.find({
      type: 'video',
    });
    return res.status(200).json(images);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  const data = req.body.data;
  try {
    await Post.insertMany(data);
    res.status(200).json({ message: 'Post successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const deletePost = async (req, res) => {
  const postId = req.body.data;
  try {
    const post = await Post.findByIdAndDelete(postId);
    return res.status(200).json({ message: 'Delete successfully', post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPost,
  getImages,
  getVideos,
  createPost,
  deletePost,
};
