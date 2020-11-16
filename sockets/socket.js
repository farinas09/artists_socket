const { io } = require("../index");

// socket messages

io.on("connection", (client) => {
  console.log("Client Connected");

  client.on("addArtist", (data) => {
    console.log("Artist Added", data);
    io.emit("addArtist", { admin: "new message" });
  });
  client.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});
