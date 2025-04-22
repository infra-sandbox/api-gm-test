const express = require('express');
const pool = require('./db');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// GET: obtener registros
app.get('/gm', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener registros' });
  }
});

// POST: agregar registro
app.post('/gm', async (req, res) => {
  try {
    const { content } = req.body;
    const result = await pool.query(
      'INSERT INTO messages (content) VALUES ($1) RETURNING *',
      [content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: 'Error al insertar registro' });
  }
});

app.listen(PORT, () => {
  console.log(`GM API corriendo en puerto ${PORT}`);
});
