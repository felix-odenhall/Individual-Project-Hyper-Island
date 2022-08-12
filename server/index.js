//Import dependencies
import express from "express";
import mongodb from "mongodb";
import cors from "cors";

//Configure MongoDB
const MONGODB_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://admin:eoiAjqS8s5JGlTj9@cluster0.qyz0gie.mongodb.net/test";

const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();

const db = mongoClient.db("cabin");
const itemsCollection = db.collection("test");

const PORT = process.env.PORT || 28017;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());


