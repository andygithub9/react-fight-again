"use strict";
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("->", req.url);
  res.send("<h1>Hello</h1>");
});

// 接收攜帶 JSON 數據的 POST 請求
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/login", (req, res) => {
  console.log(req.body);
  res.json({
    result: "OK",
    body: req.body,
  });
});

const http = require("http");
app.get("/info", (req, res) => {
  res.json({
    // 顯示可用的 HTTP 請求方法
    "http.Methods": http.METHODS,
    // 顯示可用的 HTTP 狀態代碼
    "http.STATUS_CODES": http.STATUS_CODES,
    // 顯示請求頭
    "req.headers": req.headers,
    // 顯示請求的主機名
    "req.hostname": req.hostname,
    // 顯示請求的URL
    "req.url": req.url,
    // 顯示請求路徑
    "req.path": req.path,
    // 顯示請求IP
    "req.ip": req.ip,
    // 顯示請求方法
    "req.method": req.method,
    // 顯示請求協議: http, https
    "req.protocol": req.protocol,
    // 顯示請求的域名數組
    "req.subdomains": req.subdomains,
    // 顯示請求的 query string
    "req.query": req.query,
    // 顯示請求參數
    "req.params": req.params,
    // 顯示請求表單數據
    "req.body": req.body,
  });
});

// 認證信息檢測中間件
const auth = (req, res, next) => {
  if (req.query.id == "007") {
    next();
  }
  if (req.query.id !== "007") {
    res.status(403).end();
  }
};
// app.get(路徑, 中間件, 回調函數)
app.get("/admin", auth, (req, res) => {
  res.send("管理區域");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log("there is an err");
  }
  console.log("服務運行中 http://127.0.0.1:" + PORT);
});
