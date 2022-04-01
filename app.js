const http = require('http');
const axios = require('axios');
const prompt = require('prompt-sync')();

// api Key
var apikey = "k_t6z8knyo";
let movieid = "tt0119654";

// create server
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Hello World!");
}).listen(8080);

console.log('Server started on localhost:8080');

const movie = prompt("Enter Movie Name: ");

var url = "https://imdb-api.com/en/API/SearchMovie/" + apikey + "/" + movie;

const findMovieDetails = async () => {
    const resp = await axios.get(url);
    movieid = resp.data.results[0].id;

    const urlwitthid = "https://imdb-api.com/en/API/Ratings/" + apikey + "/" + movieid;

    const response = await axios.get(urlwitthid);
    console.log("Movie Name : " + response.data.fullTitle);
    console.log("IMDB rating : " + response.data.imDb);
    console.log("Rotten Tomatoes : " + response.data.rottenTomatoes);

    process.kill(process.pid, 'SIGTERM');
};

findMovieDetails();

