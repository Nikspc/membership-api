const pool = require('../config/db1');

exports.getAll = async () => {
  const res = await pool.query('SELECT * FROM members');
  return res.rows;
};

exports.getById = async (id) => {
  const res = await pool.query('SELECT * FROM members WHERE id = $1', [id]);
  return res.rows[0];
};

exports.save = async (member) => {
  const query = `INSERT INTO members (id, name, email) VALUES ($1, $2, $3)
                 ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, email = EXCLUDED.email`;
  await pool.query(query, [member.id, member.name, member.email]);
};