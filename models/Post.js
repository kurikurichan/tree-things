import mongoose, { model, models, Schema } from "mongoose";

const PostSchema = new Schema(
  {
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    description: { type: String },
    parent: { type: mongoose.Types.ObjectId, ref: "Post" },
    images: { type: [String] },
    totalTrees: {
      type: Number,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = models?.Post || model("Post", PostSchema);
export default Post;
