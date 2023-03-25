const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imgSchema = mongoose.Schema({
  publicId: {
    type: String,
    // require: true,
  },
  url: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
});

const Image = mongoose.model('Image', imgSchema);

module.exports = Image;
