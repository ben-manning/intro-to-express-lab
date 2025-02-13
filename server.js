const express = require('express');
const app = express();

// exericse one
app.get('/greetings/:username', (req, res) => {
  res.send(`Hello there, ${req.params.username}`);
});


app.listen(3000, () => {
  console.log('listening at port:3000');
});