import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error("Titulo e Conteudo são obrigatórios.");
    }
    await PostService.createPost(post);
    console.log(post)
    res.send(post);
    res.end();
    logger.info(`POST /post/ - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}


export default {
  createPost
}