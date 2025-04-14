const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI || 'postgresql://gm_user:gm_pass@postgres:5432/gmdb',
});

module.exports = pool;
