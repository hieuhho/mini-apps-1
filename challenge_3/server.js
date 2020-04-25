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

app.get('/confirm', (req, res) => {
  console.log('res: ', res);
  console.log('req: ', req);
  res.end()
})

const port = 2020;

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});

