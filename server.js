var express = require("express");

var app = express();


// Expose /assets, /scripts and /lib just like an ordinary webserver would do.
// Use /htmlpub for / to prevent exposure of internal files.
app.use("/assets", express.static("assets"));
app.use("/scripts", express.static("scripts"));
app.use("/lib", express.static("lib"));
app.use("/", express.static("htmlpub"));

// Start the server.
app.listen(8888);
console.log("Server is up and running on http://localhost:8888");