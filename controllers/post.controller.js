const { default: mongoose } = require('mongoose');
const Image = require('../models/image.model');

const getAllImage = async (req, res) => {
  try {
    const imageList = await Image.find({});
    return res.status(200).json(imageList);
  } catch (error) {
    throw new Error('Not Found Image List');
  }
};

const createImage = async (req, res) => {
  // console.log(req.body);
  const data = req.body.data;
  try {
    await Image.insertMany(data);
    res.status(200).json({ message: 'Post successfully' });

    // let newPost;
    // imageData.map(async (item) => {
    //   newPost = new Image({
    //     item,
    //   });
    // });
    // console.log(newPost);
    // await newPost.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  getAllImage,
  createImage,
};
