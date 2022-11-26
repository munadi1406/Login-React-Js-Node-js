import express from "express";
import dotenv from 'dotenv';
import db from "./config/Database.js"; 
import router from "./routes/index.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'





dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("database terkoneksi");
} catch (error) {
  console.log(error);
}


app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(5000, () => console.log("server running"));
