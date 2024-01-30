// Importing Express
const express = require ('express');
const productCategories = require('./routes/productCategories');
const app = express();
const PORT = 5001;

// Using route from productCategory
// This method takes two arguments, path (this is where our prod categories will be shown) and a callback function.
app.use('/productCategories', productCategories)

// Initialzing our server to run on port 5001
const server = app.listen(PORT, () => {
    console.log("App is running on port 5001");
});