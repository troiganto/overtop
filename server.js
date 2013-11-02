var express = require("express");

var app = express();


// Expose /assets, /scripts and /lib just like an ordinary webserver would do.
app.use("/assets", express.static("assets"));
app.use("/scripts", express.static("scripts"));
app.use("/lib", express.static("lib"));

// Give anybody navigating to our website root the game page.
app.get("/", function(req,res){
  res.sendfile("index.html");
});

// Start the server.
app.listen(8888);
console.log("Server is up and running on http://localhost:8888");