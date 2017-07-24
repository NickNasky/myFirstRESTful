const express = require('express');
const port = process.env.PORT || 8080;
const knex = require('./db/knex');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.get('/', (req,res, next) => {
  getInfo()
  .then((info) => {
    res.json(info);
  })
});

function getInfo() {
  return knex('*').from('homework');
}
app.listen(port);
