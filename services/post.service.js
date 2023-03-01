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

async function createComentario(comentario, postId) {
  await PostRepository.createComentario(comentario, postId);
}

export default {
  createPost,
  getPosts,
  getPost,
  createComentario
}