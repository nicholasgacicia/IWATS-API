const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  showid: {
    type: Number,
    required: true
  },
  showdate: Date,
  artist: String,
  billed_as: String,
  link: String,
  location: String,
  venue: String,
  shownotes: String,
  venueid: Number,
  tourid: Number,
  tourname: String,
  tour_when: Number,
  artistlink: String,
}, { timestamps: true });

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
