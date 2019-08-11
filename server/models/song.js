const { Schema, model } = require('mongoose');

const SongSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true }
});

module.exports = model('Song', SongSchema);