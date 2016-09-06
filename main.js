// Dependencies:
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html


// Tells the console what our server.js file is doing
console.log("\n******************************************\n" +
            "Grabbing every article from ESPN Main Page" +
            "\n******************************************\n")


// make a request call for espn.com's homepage 
request('http://espn.com/', function (error, response, html) {

  // load the body of the html into cheerio
  var $ = cheerio.load(html);

  // an empty array to save scraped data
  var result = [];

 // Finds all h1 tags inside of html

  $('h1').each(function(i, element) {

      // saved text of the h1-tag as "title"
      var title = $(this).text();
      console.log('Title:', title);

    });

  // Logs result of h1 tags one espn.com
  console.log(result);
});
