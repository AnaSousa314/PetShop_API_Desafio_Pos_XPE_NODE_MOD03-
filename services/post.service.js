import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
  await PostRepository.createPost(post)
}

async function getPosts(){
  return await PostRepository.getPosts(); 
}

export default {
  createPost,
  getPosts
}