const socketio = require("socket.io");
// replace http://localhost:3000 with whatever link it is going to go on
const io = socketio(8080, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("a user has connected");
});

console.log(`listening on localhost:3000`);
