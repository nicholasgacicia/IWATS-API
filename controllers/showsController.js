const db = require('../models');

const index = (req, res) => {
  // ~Query DB for all Shows
  db.Show.find({}, (err, allShows) => {
    if (err) return console.log(err);
    res.json(allShows);
  }).sort({ showdate: -1 })
};

const show = (req, res) => {
  // console.log('Show ID = ', req.params.id);
  // ~Get Show from DB by ID
  db.Show.findById(req.params.id, (err, foundShow) => {
    if (err) return console.log(err);
    // ~Send back data to client as JSON object
    res.json(foundShow);
  });
};


const create = (req, res) => {
  // ~Query DB and create a new Show
  db.Show.create(req.body, (err, newShow) => {
    if (err) return console.log(err);
    // ~Respond with newly created Show
    res.json(newShow);
  });
};

const update = (req, res) => {
  // console.log('Show to update ID = ', req.params.id);
  // console.log('Data to update Show = ', req.body);
  db.Show.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedShow) => {
      if (err) return console.log(err);
      res.json(updatedShow);
    }
  );
};

const destroy = (req, res) => {
  // console.log('Show to delete ID = ', req.params.id);
  db.Show.findByIdAndDelete(req.params.id, (err, deletedShow) => {
    if (err) return console.log(err);
    res.json(deletedShow);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
