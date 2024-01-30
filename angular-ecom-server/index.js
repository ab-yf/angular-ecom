// Importing Express
const express = require ('express');
const app = express();
const mysql = require ('mysql2');
const PORT = 5001;


// mysql.createPool() method takes an object as paramter with database information to establish the connection.
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Q9ann4U!',
    // Name of our SQL Databse is 'estore'
    database: 'estore',
    port: 3306,
    multipleStatements: true
});

// Get Request handler by configuring the root route and sending a response
// This ensures our server is up and running.
app.get ('/', (req, res) => {
    // res.send('<h1>Hello</h1>');
    // let prodData = {
    //     pName: 'Jackets',
    //     price: 45,
    //     img: 'shop-1.jpg'
    // };
    // res.status(200).send(prodData);

    // Takes callback function, err represents error occured during establishing connection.
    // connection is a poolConnection object through which multiple database operations can be performed.

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

// Initialzing our server to run on port 5001
const server = app.listen(PORT, () => {
    console.log("App is running on port 5001");
});