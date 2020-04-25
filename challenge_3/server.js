const express= require('express');
const app = express();
const db = require('./database');

app.use(express.static('public'));
app.use(express.json());

app.post('/formOne', (req, res) => {

  db.saveOne(req.body)
  res.send({lol: 420})
  res.end()
});
app.post('/formTwo', (req, res) => {

  db.saveTwo(req.body)
  res.send({lol: 420})
  res.end()
});
app.post('/formThree', (req, res) => {

  db.saveThree(req.body)
  res.send({lol: 420})
  res.end()
});

const port = 2020;

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});

