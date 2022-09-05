import {  Server} from "socket.io";


import fs from 'fs'
import https from 'https'
import express from 'express'
// import socket from 'socket.io'
const app = express()


var options = {
  key: fs.readFileSync('/html/pem/124_223..sa.key'),
  cert: fs.readFileSync('/html/pem/124_223..19.pem')
};
var server = https.createServer(options, app).listen(3000);
const io = new Server(server, { cors: true,secure: true });

io.on("connection", (socket) => {
  socket.on("icecandidateP1", (e) => {
    socket.broadcast.emit("icecandidateP1", e);
  });
  socket.on("icecandidateP2", (e) => {
    socket.broadcast.emit("icecandidateP2", e);
  });
  socket.on("offer", (e) => {
    socket.broadcast.emit("offer", e);
  });
  socket.on("answer", (e) => {
    socket.broadcast.emit("answer", e);
  });
});