const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/gm', (req, res) => {
  res.json({ message: 'Hola desde GM API' });
});

app.listen(PORT, () => {
  console.log(`GM API corriendo en puerto ${PORT}`);
});
