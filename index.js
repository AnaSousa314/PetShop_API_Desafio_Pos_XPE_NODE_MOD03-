import express from "express";
import winston from "winston";
import cors from "cors";

import ownersRouter from "./routes/proprietario.route.js";
import animalsRouter from "./routes/animal.route.js";
import serviceRouter from "./routes/service.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp })=>{
  return `${timestamp} [ ${label} ] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: "petshop_api.log"})
  ],
  format: combine(
    label({ label: "petshop_api" }),
    timestamp(),
    myFormat
  )
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/proprietario", ownersRouter);
app.use("/animal", animalsRouter);
app.use("/servico", serviceRouter);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({error: err.message});
});

app.listen(8000, () => { console.log(`Started server at http://localhost:8000`) });