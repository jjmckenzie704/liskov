var Spotify = require('node-spotify-api');
const http = require("http");
const PORT = 3000;
const url = require('url');
let server = http.createServer(function (req, res) {
    let myQuery = url.parse(req.url, true).query.url;
    var spotify = new Spotify({
        id: "bde0d504575043aeb677f8c8c22d0c1e",
        secret: "04e98172ffd74f4299abc09ad4c1cfc3"
    });

    spotify
        .request(decodeURIComponent(myQuery))
        .then(function (data) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.write(JSON.stringify(data));
            res.end();
            console.log(data);
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });

}).listen(PORT, function (err) {
    console.log("...server running on port", PORT)
});