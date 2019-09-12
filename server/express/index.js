//1,引入express
var express = require("express");
//2，获得express对象
var app = express();
//3,引入body-parser模块
var bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//5,设置静态文件
app.use(express.static("public"));
//6,设置跨域访问
app.all("*", function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:8888");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//将地址设置为固定值
let ip="http://localhost:";
let port=8888;

let MovieItem = require("./controllers/MovieItem");
app.get("/movieItems", MovieItem.index);

let MovieHead = require("./controllers/MovieHead");
app.get("/HeadScorll", MovieHead.comment);

let sellController = require("./controllers/SellController");
app.get("/sell", sellController.sell);

let MovieTopics = require("./controllers/MovieTopics");
app.get("/MovieTopics", MovieTopics.detail);
let MoviePictures = require("./controllers/MoviePictures");
app.get("/MoviePicture", MoviePictures.detail);

let UserController = require("./controllers/UserController");
app.get("/users", UserController.index);

//7,进行监听
app.listen(port, function() {
  console.log("启动");
});
