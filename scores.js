const express = require('express');
const app = express();
const jsonBody = require('body/json');
const hostname = '';
const port = 3000;
// const bodyParser = require('body-parser')

var body;
var scores = [{
    name: "Edwin",
    score: 50
}, {
    name: "David",
    score: 39
}];

app.get('/', function(req, res) {
    res.status(404);
    res.end();
});

app.get('/scores', function (req, res) {
    res.status(200);
    res.setHeader('Content-Type', 'application/javascript');
    scores.sort((a, b) => (b.score - a.score));
    threeTopScores = scores.slice(0, 3);
    scores = threeTopScores;
    res.send(JSON.stringify(scores));
    //
    console.log(req.url);
    console.log(req.method);
    console.log(res.statusCode);
});

app.post('/scores', function (req, res) {
    res.status(201);
    jsonBody(req, res, (err, body) => {
        scores.push(body);
    });
    res.send();
});

app.listen(port, hostname, () => {
    console.log(`Listening on ${port}!`);
    console.log(`Server running at http://${hostname}:${port}/`);
});
