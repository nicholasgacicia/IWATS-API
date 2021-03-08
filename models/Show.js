const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  showid: {
    type: Number,
    required: true
  },
  showdate: {
    type: Date,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  billed_as: String,
  link: String,
  location: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  shownotes: String,
  venueid: Number,
  tourid: Number,
  tourname: String,
  tour_year: String,
  artistlink: String,
}, { timestamps: true });

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
