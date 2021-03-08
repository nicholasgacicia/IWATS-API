const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({

}, { timestamps: true });

const Show = mongoose.model('Show', showSchema);

module.exports = Game;
