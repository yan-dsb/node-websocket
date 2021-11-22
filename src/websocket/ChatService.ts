import { io } from '../http';

io.on('connect', socket => {
  socket.emit('chat_init', {
    message: 'Your chat was initialized'
  });
});
