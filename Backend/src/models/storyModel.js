import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
    },
    viewers: [
      {
        type: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const storyModel = mongoose.model("Story", postSchema);

export default storyModel;
