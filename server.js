// index.js
const express = require('express');
const pool = require('./connection.js')
// Create an Express application
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');  // Import CORS

const jokeRoutes = require('./routes/jokeRoutes');


app.use(cors());

app.use(express.json());
app.use('/api', jokeRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
