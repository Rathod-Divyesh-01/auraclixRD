import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    },
    receiverId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const messageModel = mongoose.model("Message", postSchema);

export default messageModel;
