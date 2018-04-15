const express = require("express");
const request = require('request');
const app = express();

populateDB()

function populateDB(error, response, body) {
    request('https://data.colorado.gov/resource/p3jp-z4tq.json?principalcity=Denver', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(response)
            var data = JSON.parse(response)
            console.log(data)
        }
    }) 
}

