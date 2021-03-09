const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  phishnet_showid: Number,
  showdate: Date,
  artist: String,
  billed_as: String,
  link: String,
  location: String,
  venue: String,
  shownotes: String,
  phishnet_venueid: Number,
  phishnet_tourid: Number,
  tourname: String,
  tour_year: String,
  artistlink: String,
}, { timestamps: true });

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
