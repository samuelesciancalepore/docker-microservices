const express = require('express');     // express import
const bodyParser = require('body-parser');  // body-parser import

const app = express();  // express execution to generate an app object
// the express app will contain various methods and utilities (and support addition of new ones)

// calls the body parser to elaborate data contained in the body of the failed request
app.use(bodyParser.urlencoded({extended: false}));  // route for simple urlencoded data/query strings
app.use(bodyParser.json()); // route for json data

// adds headers to solve Cross-Origin problems  TODO evaluate the situation
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:*');
    res.header('Access-Control-Allow-Header', '*');     // specifying allowed headers (all)

    // checking if the incoming request method is OPTIONS
    if(req.method === 'OPTIONS') {
        // specifying the allowed methods
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH');
        return res.status(200).json({});    // returning the header
    }
    next(); // forwarding the request to the next routes
});

// setting up a route for authentication purposes
app.get('/getrandom', (req, res, next) => {
    res.status(200).json({
        randomNumber: (Math.floor(Math.random()*(100-1)+1))
    });
});

// if none of the routes above matched the requests, return a 404 error
app.use((req, res, next) => {
    const error = new Error('404: Resource not found');  // creates an error object, adding the description
    error.status=404;   // sets the status code to NOT FOUND
    next(error);    // forwards the error to the next function in the list (error handler function)
});

// function handling all request errors; invoked for any previous unchecked error
app.use((error, req, res, next) => {
    res.status = 500;   // sets the status code to SERVER ERROR
    res.json({
        error: {
            message: error.message
        }
    });
});


// generates a module from the app
module.exports = app;