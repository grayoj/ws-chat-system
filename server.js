// Gerald Maduabuchi

const express = require('express');

// server
const http = require('http');


// require websocket
const webSocket = require('ws');

// start websocket
const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(data) {

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                
                client.send(data);
            }
        })
    })
})

server.listen(port, function() {
    console.log(`express server listening on port ${port}!`)
})