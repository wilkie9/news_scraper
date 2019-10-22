var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Simple index route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

// Start the server
app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});


app.get("/scrape", function(req, res) {
    axios.get("http://washingtonpost.com").then(function(response) {
   
        var $ = cheerio.load(response.data);
        var headline = [];
        var summary = [];
        var url = [];
        var listItems = $("ul.idiKw li a").each(function(i, elem) {
            headline.push($(elem).text());
            summary.push($(elem).text());
            url.push($(elem).text());
            links.push("https://washingtonpost.com/" + $(elem).attr("href"));
        });
    
        console.log(headline);
        console.log(summary);
        console.log(url);
    });
});


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);