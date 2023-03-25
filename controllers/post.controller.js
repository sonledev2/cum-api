const { default: mongoose } = require('mongoose');
const Image = require('../models/image.model');

// const getAllImage = async (req, res) => {
//   try {
//     const imageList = await Image.find({});
//     return res.status(200).json(imageList);
//   } catch (error) {
//     throw new Error('Not Found Image List');
//   }
// };

const getAllImage = async (req, res) => {
  try {
    const randomImage = await Image.aggregate([
      {
        $sample: { size: 50 },
      },
    ]);
    return res.status(200).json(randomImage);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getImages = async (req, res) => {
  try {
    const images = await Image.find({
      type: 'image',
    });
    return res.status(200).json(images);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getVideos = async (req, res) => {
  try {
    const images = await Image.find({
      type: 'video',
    });
    return res.status(200).json(images);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const createImage = async (req, res) => {
  const data = req.body.data;
  try {
    await Image.insertMany(data);
    res.status(200).json({ message: 'Post successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  getAllImage,
  getImages,
  getVideos,
  createImage,
};
