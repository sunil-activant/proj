const { Pool } = require('pg');

const pool = new Pool({
  user: 'avnadmin',
  host: 'pg-396bccce-sunilverma-0dec.j.aivencloud.com',      
  database: 'defaultdb',
  password: 'AVNS_TFY4r4At52zC1pylvsm',
  port: 10633,                   
  ssl: {
    rejectUnauthorized: false, 
  },
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connection established:', result.rows);
  });
});

module.exports = pool;
