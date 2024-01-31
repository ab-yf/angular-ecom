// We added these files here from productCategories as pool needs to be shared
const mysql = require ('mysql2');

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

// Export our pool as we want to share it
module.exports = pool;
