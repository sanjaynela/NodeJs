var http = require('http');
var dt = require('./myfirstmodule');

//Create a server object
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'}); 
    res.write("The date and time are currently : " + dt.myDateTime()); //Write a response to the client
    res.end('<br/> Hello World!'); //End the response
}).listen(8080); //The server object listens on port 8080