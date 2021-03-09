const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');


// ~Middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// ~Cross Origin Resource Sharing
app.use(cors());


// ~Home Route
app.get('/', (req, res) => {
  res.send('<h1>YEMStats API</h1>');
});

// ~Shows API Routes
app.use('/api/shows', routes.shows);
// ~Users API Routes
app.use('/api/users', routes.users);


// ~App Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
