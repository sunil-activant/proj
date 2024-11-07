const { addJoke, getAllJokes } = require('../models/joke');

const createJoke = async (req, res) => {
  try {
    const { jokeId } = req.body;
    console.log(jokeId)
    const joke = await addJoke(jokeId);
    res.status(201).json({ message: 'Joke added successfully', joke });
  } catch (error) {
    res.status(500).json({ message: 'Error adding joke', error: error.message });
  }
};

const fetchAllJokes = async (req, res) => {
  try {
    const jokes = await getAllJokes();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jokes', error: error.message });
  }
};

module.exports = { createJoke, fetchAllJokes };
