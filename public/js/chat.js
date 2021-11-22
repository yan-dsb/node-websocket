const socket = io('http://localhost:3333');

socket.on('chat_init', data => {
  console.log(data);
});
