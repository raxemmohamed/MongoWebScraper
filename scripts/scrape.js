var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
    request("http://www.nytimes.com", function(err, res, body){
        var $ = cheerio.load(body);
        var articles = [];
        $(".theme-summary").each(function(i, element){
            var head = $(this).children(".story-heading").text().trim();
            var sum = $(this).chuldren(".summary").text().trim();

            if(head && sum){
                var head = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sum = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat
                };

                articles.push(dataToAdd);
            }
        });
        cb(articles);
    });
};
module.exports = scrape;