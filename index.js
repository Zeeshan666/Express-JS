const express = require("express"),
  http = require("http");

const morgan = require("morgan");


const hostname = "localhost";
const port = 3000;
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader = ("application/type", "html/txt");
  next();
});
app.get("/dishes", (req, res, next) => {
  res.end("we will send you all dishes");
});
app.post("/dishes", (req, res, next) => {
  res.end(
    "Will add the dish: " +
      req.body.name +
      " with details: " +
      req.body.description
  );
});
app.put("/dishes", (req, res, next) => {
  res.statusCode = 403;
  res.end("not supported in dishes");
});
app.delete("/dishes", (req, res, next) => {
  res.end("all items will delete");
});
app.get("/dishes/:dishID", (req, res, next) => {
  res.end("we will send you requested dish" + req.params.dishID + "to you");
});
app.post("/dishes/:dishID", (req, res, next) => {
  res.statusCode = 403;
  res.end(" post  not supported in dishes" + req.params.dishID + "");
});
app.put("/dishes/:dishID", (req, res, next) => {
  res.write("updating the dish" + req.params.dishID + "\n");
  res.end(
    "will update the dish" +
      req.body.name +
      "with details" +
      req.body.discription
  );
});
app.delete("/dishes/:dishID", (req, res, next) => {
  res.end("this items will delete " + req.params.dishID);
});
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  //   console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
