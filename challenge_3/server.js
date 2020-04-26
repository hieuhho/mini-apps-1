const express= require('express');
const app = express();
const db = require('./database');

app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', (req, res) => {
  db.newCheckout(req.body);
  res.send({lol: res.body})
  res.end()
})

app.post('/formOne', (req, res) => {
  db.saveOne(req.body)
  res.send({lol: 'OK'})
  res.end()
});

app.post('/formTwo', (req, res) => {
  db.saveTwo(req.body)
  res.send({lol: "OK"})
  res.end()
});

app.post('/formThree', (req, res) => {
  db.saveThree(req.body)
  res.send({lol: "OK"})
  res.end()
});

app.post('/purchase', (req, res) => {
  return db.find(req.body)
  .then((data) => {
    res.send(data)
    res.end()
  })
  .catch((err) => {
    console.error('ERROR PURCHASE', err)
    res.end()
  })
})

const port = 2020;

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});

