import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
  await PostRepository.createPost(post)
}

export default {
  createPost
}