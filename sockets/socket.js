const { io } = require("../index");
const Artist = require("../models/artist");
const Artists = require("../models/artists");

const artists = new Artists();

artists.addArtist(new Artist('Drake'));
artists.addArtist(new Artist('Ed Sheeran'));
artists.addArtist(new Artist('Travis Scott'));

io.on("connection", (client) => {
  console.log("Client Connected");

  client.emit('active-artists', artists.getArtists());

  client.on("addArtist", (data) => {
    client.broadcast.emit("addArtist", { artist: data });
  });
  client.on("disconnect", () => {
    console.log("Client Disconnected");
  });
  client.on("emit-message", (data) => {
    io.emit("new-message", "new message!!!!");
  });
});
