require("dotenv").config();

import mongoose from "mongoose";

mongoose.set('strictQuery', false);

export type Db = typeof mongoose;

export async function connectToDb() {
  const db = await mongoose.connect(process.env.MONGODB_URI!);

  let connection = db.connection;

  connection.on(
    "error",
    console.error.bind(console, "Erro de conexão ao banco de dados:")
  );

  return db;
}
