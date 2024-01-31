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


// We now have a route which accepts a product ID as a parameter
// Here, :id specifices route paramter and we extract that param in local 'id' variable using req.params.id.
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
