const { io } = require("../index");

// socket messages

io.on("connection", (client) => {
  console.log("Client Connected");

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
