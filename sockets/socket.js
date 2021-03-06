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

  client.on("add-artist", (data) => {
    artists.addArtist(new Artist(data.name));
    io.emit("active-artists", artists.getArtists());
  });
  client.on("delete-artist", (data) => {
    artists.deleteArtist(data.id);
    io.emit("active-artists", artists.getArtists());
  });
  client.on("add-vote", (data) => {
    artists.voteArtist(data.id);
    io.emit("active-artists", artists.getArtists());
  });
  client.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});
