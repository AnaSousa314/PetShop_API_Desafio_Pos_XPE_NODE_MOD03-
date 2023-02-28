import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
  await PostRepository.createPost(post)
}

async function getPosts(){
  return await PostRepository.getPosts(); 
}

async function getPost(postId) {
  return await PostRepository.getPost(postId);
}


export default {
  createPost,
  getPosts,
  getPost
}