import express from "express";
import i18n from "i18n";
import mongodb from "mongodb";
import config from "config";
import dotenv from "dotenv";
dotenv.config();

const MongoClient = mongodb.MongoClient;
const HOST = process.env.MONGO_HOST || "localhost";

const url = `mongodb://${HOST}`;

const globalConfig: object = config.get("globalConfig");
console.log(globalConfig);

const client = await MongoClient.connect(url, { useUnifiedTopology: true });
const db = client.db("forest");
const collection = db.collection("entries");

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

i18n.configure({
  locales: ["en", "de"],
  directory: "locales",
});

app.use(i18n.init);

app.use(express.static("assets"));

app.get("/:entry?", async (request, response) => {
  console.log(request.params.entry);
  if (request.params.entry === undefined) {
    request.params.entry = "index";
  }
  const data = await collection.findOne({ name: request.params.entry.toLowerCase() });
  if (data === null) {
    response.status(200);
    response.render("404", {...globalConfig});
    return;
  }
  if (data.logo) {
    data.icon = `http://localhost:3001/resources/${data.logo}`;
  }
  if (data.background) {
    data.backgroundImage = `http://localhost:3001/resources/${data.background}`;
  }
  response.render("index", { ...data, ...globalConfig, ...data, });
});

if (process.env.PORT === undefined) {
  process.env.PORT = "3002";
}
app.listen(process.env.PORT);
