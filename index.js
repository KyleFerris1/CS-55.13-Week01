// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics

console.log("Hello World");

let http = require("http");

let myserver = http.createServer(

  function( myrequest, myresponse ){
    console.log(myrequest.url);

    myresponse.writeHead(200, {"Content-Type": "text/plain"});

    myresponse.end("Response test.");
  }
);

myserver.listen(80, "0.0.0.0");