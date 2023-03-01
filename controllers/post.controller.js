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

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
    logger.info(`GET /post/ `)
  } catch (err) {
    next(err);
  }
}

async function getPost(req, res, next) {
  try {
    res.send(await PostService.getPost(req.params.id));
    logger.info(`GET /product/${req.params.id}`)
  } catch (err) {
    next(err);
  }
}

async function createComentario(req, res, next) {
  try {
    let params = req.body;
    if (!params.postId || !params.comentarios) {
      throw Error("Post ID e Comentário são obrigatórios!");
    }
    await PostService.createComentario(params.comentarios, params.postId);
    res.send(params)
    logger.info(`POST /post/comentario ${params.postId} - ${JSON.stringify(params.comentarios)}`)
  } catch (err) {
    next(err);
  }
}


export default {
  createPost,
  getPosts,
  getPost,
  createComentario
}