// This file is created to define routes to fetch our products

const express = require('express');
const products = express.Router();
const pool = require('../shared/pool');

products.get('/', (req, res) => {

  // Query Paramters to filer products by category.
  var mainCategoryId = req.query.maincategoryid;
  var subCategoryId = req.query.subcategoryid;
  var keyword = req.query.keyword;
  let query = 'select * from products';

  // added fetching products from subcategory id
  if (subCategoryId) {
    query += ' where category_id = ' + subCategoryId;
  }

    // added fetching products from their main category id
  if (mainCategoryId) {
    query = `select products.* from products, categories 
    where products.category_id = categories.id and categories.parent_category_id = ${mainCategoryId}`;
  }

  // Keyword search for our products
  if (keyword) {
    query += ` and keywords like '%${keyword}%'`;
  }

  pool.query(query, (error, products) => {
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
