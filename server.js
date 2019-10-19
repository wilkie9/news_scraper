var express = require("express");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");

var request = require("request");

var PORT = process.env.PORT || 3000;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);