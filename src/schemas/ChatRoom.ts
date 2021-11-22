import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { User } from './User';

type ChatRoom = Document & {
  id_users: User[];
  id_chatroom: string;
};

const ChatRoomSchema = new Schema({
  id_users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }
  ],
  id_chatroom: {
    type: String,
    default: uuid()
  }
});

const ChatRoom = mongoose.model<ChatRoom>('ChatRoom', ChatRoomSchema);

export { ChatRoom };
