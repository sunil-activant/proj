const express = require('express');
const { createJoke, fetchAllJokes } = require('../controllers/jokeController');

const router = express.Router();

router.post('/jokes', createJoke);

router.get('/jokes', fetchAllJokes);

module.exports = router;
