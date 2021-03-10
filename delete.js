const db = require('./models');


// ~Delete All Shows records
db.Show.deleteMany({ artist: 'Trey' }, (err, deletedShows) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  console.log(deletedShows);
  return console.log('Shows deleted successfully');
});
