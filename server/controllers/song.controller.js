const Song = require('../models/song');
const songCtrl = {};

songCtrl.getSongs = async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
};

songCtrl.createSong = async (req, res) => {
  const song = new Song({
    name: req.body.name,
    artist: req.body.artist,
    album: req.body.album
  });
  await song.save();
  res.json({ status: 'Song saved!' });
};

songCtrl.getSong = async (req, res) => {
  const songs = await Song.findById(req.params.id);
  res.json(songs);
};

songCtrl.editSong = async (req, res) => {
  const { id } = req.params;
  const song = {
    name: req.body.name,
    artist: req.body.artist,
    album: req.body.album
  };
  await Song.findByIdAndUpdate(id, { $set: song }, { new: true });
  res.json({ status: "Song updated!" });
};

songCtrl.deleteSong = async (req, res) => {
  await Song.findByIdAndRemove(req.params.id);
  res.json({ status: "Song deleted!" });
};

module.exports = songCtrl;