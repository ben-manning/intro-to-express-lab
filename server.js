const express = require('express');
const app = express();

// exericse one
app.get('/greetings/:username', (req, res) => {
  res.send(`Hello there, ${req.params.username}`);
});

// exericse two
app.get('/roll/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.send('You must specify a number!');
  } else {
    let randomNumber = Math.ceil(Math.random() * req.params.number);
    res.send(`You rolled a ${randomNumber}`);
  }
});


app.listen(3000, () => {
  console.log('listening at port:3000');
});