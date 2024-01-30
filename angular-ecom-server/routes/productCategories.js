// // Importing Express
// const express = require ('express');
// // Addedd Express.Router as it is better for handling routes.
// const productCategories = express.Router();
// const mysql = require ('mysql2');

// // mysql.createPool() method takes an object as paramter with database information to establish the connection.
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'Q9ann4U!',
//     // Name of our SQL Databse is 'estore'
//     database: 'estore',
//     port: 3306,
//     multipleStatements: true
// });

// productCategories.get ('/', (req, res) => {
//     // We want to use Pool instead of connection because it allows multiple connections to be handled at once, is quicker, no need for getConnection()
//     // and handles the connection , query and release stages by pool.query().
//     // if there is an error during connection phase, that will be handled by the "pool.query()"

//     pool.query('select * from categories', (error, categories) => {
//         if (error) {
//             res.status(500).send(error);
//         }else {
//             //We want to send the categories to our client.
//             res.status(200).send(categories);
//         }
//     });
// });

// module.exports = productCategories;

const express = require('express');
const mysql = require('mysql2');
const productCategories = express.Router();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Q9ann4U!',
  database: 'estore',
  port: 3306,
  multipleStatements: true,
});

productCategories.get('/', (req, res) => {
  pool.query('select * from categories', (error, categories) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(categories);
    }
  });
});

module.exports = productCategories;
