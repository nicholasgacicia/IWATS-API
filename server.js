const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

require('./models');

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>YEMStats API</h1>');
});

// App Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
