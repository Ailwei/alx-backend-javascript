const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.status(404).send();
  } else {
    res.status(200).send(`Payment methods for cart ${id}`);
  }
});

app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Username is missing');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
