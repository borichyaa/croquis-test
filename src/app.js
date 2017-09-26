var express = require('express');
var app = express();
var solver = require('./CroquisSolver');
var PORT = 3000;

app.get('/', function(req, res) {
    //var result = solver.solve(req.getAttribute('str'));
    var result = solver.solve('ab2v9bc13j5jf4jv21');
    res.send(result+"");
});

app.listen(PORT, function() {
    console.log('listening to server at port' + PORT);
});