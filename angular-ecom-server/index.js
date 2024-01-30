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
    pool.getConnection((err, connection) => {
        if (err) {
        res.status(500).send(err);
        } else {
        pool.query('select * from categories', (error, categories) => {
            if (error) {
                res.status(500).send(error);
            }else {
                //We want to send the categories to our client.
                res.status(200).send(categories);
            }
        });
        // res.status(200).send('Connection Established');
        }
    });
});

// Initialzing our server to run on port 5001
const server = app.listen(PORT, () => {
    console.log("App is running on port 5001");
});