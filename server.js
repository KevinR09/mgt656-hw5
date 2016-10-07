var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! This is my test');
});


app.get('/ksr43', function(request, response){
    response.send('Hello MGT-656! Here is my netID');
});

app.get('/nickname', function(request, response){
    response.send('graceful-otter');
    
});

app.listen(process.env.PORT || 4000);