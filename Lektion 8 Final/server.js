const express = require('express');
const fs = require("fs")



var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {
res.redirect('index.html');
});

io.on('connection', function (socket) {
console.log("connected")
for (var i in messages) {
io.sockets.emit("display message", messages[i]);
}
socket.on("send message", function (data) {
console.log("recieving message")
messages.push(data);
fs.writeFileSync("messages.json", JSON.stringify(messages));
io.sockets.emit("display message", data);
});
});

server.listen(3000);