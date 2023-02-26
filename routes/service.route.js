import express from "express";
import ServicoController from "../controllers/servico.controller.js";

const router = express.Router();

router.post("/", ServicoController.createService);  
router.get("/", ServicoController.getServices);  

export default router;