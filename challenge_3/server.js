const express= require('express');
const app = express();
const port = 2020;

app.get('/checkout', (req, res) => {
  res.send('hello World')
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});

