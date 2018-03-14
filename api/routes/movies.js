const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('movies')
    .select()
    .then(movies => {
      res.send(movies);
    });
});

module.exports = router;
