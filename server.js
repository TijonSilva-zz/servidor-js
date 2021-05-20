const express = require('express')
const server = express()

server.get("/", function(req, res) {
 return
})

server.listen (5000, function() {
console.log("server is running")
})
