const express = require("express");
const path = require("path");
require("dotenv").config();

//init express app
const app = express();

//node server
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// socket messages

io.on("connection", (client) => {
  console.log("Client Connected");
  client.on("addArtist", () => {});
  client.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});

const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Server running on Port", process.env.PORT);
});
