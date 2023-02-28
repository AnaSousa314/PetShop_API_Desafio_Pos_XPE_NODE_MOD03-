import PostSchema from "../schemas/post.schema.js"
import { connect } from "../config/mongodb/mongo.db.js";

async function createPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);
    post = new Post(post);
    await post.save();
  } catch (err) {
    throw err;
  }
}

async function getPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);
    return await Post.find({});
  } catch (err) {
    throw err;
  }
}

export default {
  createPost,
  getPosts
}