const express = require('express');
const app = express();
const path = require('path');
const socketIo = require('socket.io');
const http = require('http');

var server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;
const pathToPublic = path.join(__dirname, '../public');

app.use(express.static(pathToPublic));

app.get('/control', (req, res) => {
    res.se
}); 

io.on('connection', socket => {
    socket.emit('newDisplay');
    socket.on('listNewDisplay', codename => {
        io.sockets.emit('displayListed', codename);
    });
    socket.on('sendReq', device => {
        io.sockets.emit('showReq', device);
    });
    socket.on('controlAccepted', codename => {
        io.sockets.emit('initializeControl', codename);
    });
    socket.on('reqRed', display => {
        io.sockets.emit('turnRed', display);
    });
    socket.on('reqBlue', display => {
        io.sockets.emit('turnBlue', display);
    });
});

server.listen(port, () => {
    console.log('Server is up on port ' + port);
});