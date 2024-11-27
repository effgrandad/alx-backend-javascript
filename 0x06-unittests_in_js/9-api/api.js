const express = require('express');

const app = express();
const PORT = 7865;

app.param('id', (req, res, next, id) => {
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Invalid ID. ID must be a number.');
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;
