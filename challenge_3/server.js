const express= require('express');
const app = express();

app.use(express.static('public'))

app.get('/checkout', (req, res) => {
  res.send('hello World')
});

const port = 2020;

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});

