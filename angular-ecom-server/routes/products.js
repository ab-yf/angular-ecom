// This file is created to define routes to fetch our products

const express = require('express');
const products = express.Router();
const pool = require('../shared/pool');

products.get('/', (req, res) => {
  pool.query('select * from products', (error, products) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(products);
    }
  });
});

products.get('/(:id)', (req, res) => {
  let id = req.params.id;
  pool.query('select * from products where id = ' + id, (error, products) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(products);
    }
  });
});

// exporting so that our products are available to other files.
module.exports = products;
