const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

var request = require('request');



app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/hi', function(req,res) {
    request("https://www.google.com/search?client=safari&rls=en&q="+"goof", function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
    });
});

app.listen(9000);
