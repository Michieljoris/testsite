var page = require("webpage").create();
var homePage = "http://www.google.com";
var fs = require("fs");
console.log('hello');
// page.settings.javascriptEnabled = false;
// page.settings.loadImages = false;
page.open(homePage);
page.onLoadFinished = function(status) {
    var url = page.url;
    console.log("Status:  " + status);
    console.log("Loaded:  " + url);
    var file = fs.open("www/output.html", "w");
 
    file.write(page.content);
    file.close();
    page.render("google.png");
    phantom.exit();
};
