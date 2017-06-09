var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || 1122;

app.listen(port, function() {
    console.log('server up on', port);
});


app.get('/', function(req, res){
    console.log('inside of base url');
    
    res.sendFile(path.resolve("public/views/index.html"));
});
