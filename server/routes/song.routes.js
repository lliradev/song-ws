const express = require('express');
const router = express.Router();
const song = require('../controllers/song.controller');

router.get('/', song.getSongs);
router.post('/', song.createSong);
router.get('/:id', song.getSong);
router.put('/:id', song.editSong);
router.delete('/:id', song.deleteSong);

module.exports = router;