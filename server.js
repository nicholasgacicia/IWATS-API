const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>YEMStats API</h1>');
});

// Shows API Routes
app.use('/api/shows', routes.shows);


// App Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
