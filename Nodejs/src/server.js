import express from "express";
import bodyParser, { BodyParser } from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config();

let app = express();

// cấu hình app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initwebRoutes(app);

connectDB();

let port = process.env.PORT || 8081;
// nếu chết port 8080 sẽ chạy port 8081

app.listen(port, () => {
  //callback
  console.log("runing on the port: " + port);
});
