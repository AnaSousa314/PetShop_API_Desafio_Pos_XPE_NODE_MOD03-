import express from "express";
import ServicoController from "../controllers/servico.controller.js";

const router = express.Router();

router.post("/", ServicoController.createService);  
router.get("/", ServicoController.getServices);  

router.get("/:id", ServicoController.getService);  
router.put("/", ServicoController.updateService);  
router.delete("/:id", ServicoController.deleteService);  

export default router;