const express = require('express');
const port = process.env.PORT || 8080;
const knex = require('./db/knex');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  getInfo()
  .then((info) => {
    res.json(info);
  });
});

app.get('/:id', (req, res) => {
  let id = req.params.id;
  getInfo().where('id', id).first()
  .then((info) => {
    res.json(info);
  });
});

app.post('/', (req, res) => {
  let body = req.body;
  knex('homework').insert(body)
  .returning('*')
  .then(info => {
    res.json(info[0])
  });
});

app.put('/:id', (req, res) => {
  let body = req.body;
  let id = req.params.id;

  knex('homework').where('id', id) .update(body)
  .returning('*')
  .then(info => {
    res.json(info[0])
  });
});

app.delete('/:id', (req, res) => {
  let id = req.params.id;

  knex('homework').where('id', id)
  .del().then(deleted => {
    res.json({
      'deleted': true
    });
  });
})

function getInfo() {
  return knex('*').from('homework');
}
app.listen(port);
