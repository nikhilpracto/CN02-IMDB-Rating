var http = require('http');
var imdb = require('imdb-node-api');
const axios = require('axios');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Hello World!");
}).listen(8080);
console.log('Server started on localhost:8080');

var apikey = "k_t6z8knyo";
const prompt = require('prompt-sync')();

const movie = prompt("Enter Movie Name: ");

var url = "https://imdb-api.com/en/API/SearchMovie/" + apikey + "/" + movie;

let movieid = "tt0119654";

axios.get(url).then(response=>{
    movieid = response.data.results[0].id;
    console.log(movieid);
});

var urlwitthid = "https://imdb-api.com/en/API/Ratings/" + apikey + "/" + movieid;

axios.get(urlwitthid).then(response=>{
    console.log("Movie Name : " + response.data.fullTitle);
    console.log("IMDB rating : " + response.data.imDb);
    console.log("Rotten Tomatoes : " + response.data.rottenTomatoes);
});

