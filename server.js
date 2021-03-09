const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');


// ~Middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// ~Cross Origin Resource Sharing
app.use(cors());
// const whitelist = ['http://example1.com', 'http://example2.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }


// ~Home Route
app.get('/', (req, res) => {
  res.send('<h1>YEMStats API</h1>');
});

// ~Shows API Routes
app.use('/api/shows', routes.shows);


// ~App Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
