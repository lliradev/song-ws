const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Inicializando
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/songs/', require('./routes/song.routes'));

module.exports = app;