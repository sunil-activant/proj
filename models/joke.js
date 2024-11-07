const pool = require('../connection');

const addJoke = async (jokeId) => {
  const query = `
    INSERT INTO jokes (joke_id, created_at)
    VALUES ($1, NOW())
    RETURNING *;
  `;
  const values = [jokeId];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAllJokes = async () => {
  const query = 'SELECT * FROM jokes ORDER BY created_at DESC'; // Optional: ordering by creation date
  const result = await pool.query(query);
  return result.rows;
};

module.exports = { addJoke, getAllJokes };
