// const { Pool } = require('pg');
// const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
// module.exports = pool;

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'user',
//   host: 'members-postgres',  // Use container name instead of localhost
//   database: 'membersdb',
//   password: 'pass',
//   port: 5432,
// });

pool.connect()
  .then(() => console.log("Connected to PostgreSQL!"))
  .catch(err => console.error("Connection error:", err));


  const pgp = require('pg-promise')();

  const db = pgp({
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
  });
  
  module.exports = db;
  
