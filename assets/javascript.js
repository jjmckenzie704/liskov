url = 'https://api.spotify.com/v1/search';
q = 'Joe Satriani';
type = "artist";
market = "US";
limit = "2";
offset = "5";   

var endpoint = encodeURIComponent(
    url + '?q=' + q
    + '&type=' + type
    + '&market=' + market
    + '&limit=' + limit
    + '&offset=' + offset 
);

$.ajax({
    type: "GET",
    url: "http://localhost:3000",
    data : {
        url: endpoint
    },
    success: function (data) {
        console.log(data);
    },
    error: function(error) {
        console.log(error);
    }
});