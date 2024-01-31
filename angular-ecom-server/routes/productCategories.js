// Importing Express
const express = require ('express');
// Addedd Express.Router as it is better for handling routes.
const productCategories = express.Router();
// Adding our shared pool instead of having it in this file.
const pool = require ('../shared/pool')

productCategories.get ('/', (req, res) => {
    // We want to use Pool instead of connection because it allows multiple connections to be handled at once, is quicker, no need for getConnection()
    // and handles the connection , query and release stages by pool.query().
    // if there is an error during connection phase, that will be handled by the "pool.query()"

    pool.query('select * from categories', (error, categories) => {
        if (error) {
            res.status(500).send(error);
        }else {
            //We want to send the categories to our client.
            res.status(200).send(categories);
        }
    });
});

module.exports = productCategories;


