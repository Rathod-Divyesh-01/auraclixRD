import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    postCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const hashtagModel = mongoose.model("Hashtag", postSchema);

export default hashtagModel;
