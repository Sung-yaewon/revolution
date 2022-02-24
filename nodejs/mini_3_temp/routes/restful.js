const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const anywhereFarm = [
  { name: "User1", date:0101, time:0000, temperature:27.06, humidity:22.03, growth:3},
  { name: "User1", date:0102, time:0000, temperature:26.05, humidity:23.05, growth:7},
  { name: "User1", date:0103, time:0000, temperature:27.58, humidity:22.75, growth:9},
  { name: "User1", date:0104, time:0000, temperature:24.26, humidity:22.06, growth:13},
  { name: "User1", date:0105, time:0000, temperature:28.15, humidity:23.15, growth:17},
  { name: "User1", date:0201, time:0000, temperature:27.62, humidity:22.00, growth:21},
  { name: "User1", date:0202, time:0000, temperature:26.48, humidity:23.62, growth:23},
  { name: "User1", date:0203, time:0000, temperature:27.65, humidity:22.15, growth:24},
  { name: "User1", date:0204, time:0000, temperature:24.15, humidity:22.46, growth:27},
  { name: "User1", date:0205, time:0000, temperature:28.85, humidity:23.85, growth:30},
  { name: "User1", date:0301, time:0000, temperature:27.35, humidity:22.64, growth:31},
  { name: "User1", date:0302, time:0000, temperature:26.04, humidity:23.34, growth:33},
  { name: "User1", date:0303, time:0000, temperature:27.58, humidity:22.81, growth:34},
  { name: "User1", date:0304, time:0000, temperature:24.63, humidity:22.65, growth:37},
  { name: "User1", date:0305, time:0000, temperature:28.48, humidity:23.91, growth:39},
  { name: "User2", date:0101, time:0000, temperature:17.06, humidity:15.45, growth:1},
  { name: "User2", date:0102, time:0000, temperature:17.07, humidity:14.28, growth:3},
  { name: "User2", date:0103, time:0000, temperature:16.28, humidity:15.82, growth:4},
  { name: "User2", date:0104, time:0000, temperature:18.06, humidity:14.35, growth:5},
  { name: "User2", date:0105, time:0000, temperature:17.32, humidity:13.15, growth:6},
  { name: "User2", date:0201, time:0000, temperature:17.65, humidity:15.61, growth:8},
  { name: "User2", date:0202, time:0000, temperature:17.52, humidity:14.49, growth:9},
  { name: "User2", date:0203, time:0000, temperature:16.42, humidity:15.53, growth:10},
  { name: "User2", date:0204, time:0000, temperature:18.84, humidity:14.61, growth:12},
  { name: "User2", date:0205, time:0000, temperature:17.62, humidity:13.84, growth:13},
  { name: "User2", date:0301, time:0000, temperature:17.15, humidity:15.62, growth:15},
  { name: "User2", date:0302, time:0000, temperature:17.84, humidity:14.23, growth:16},
  { name: "User2", date:0303, time:0000, temperature:16.42, humidity:15.15, growth:17},
  { name: "User2", date:0304, time:0000, temperature:18.25, humidity:14.34, growth:18},
  { name: "User2", date:0305, time:0000, temperature:17.37, humidity:13.27, growth:20},
  { name: "User3", date:0101, time:0000, temperature:21.02, humidity:17.84, growth:2},
  { name: "User3", date:0102, time:0000, temperature:22.85, humidity:18.64, growth:4},
  { name: "User3", date:0103, time:0000, temperature:23.01, humidity:17.72, growth:6},
  { name: "User3", date:0104, time:0000, temperature:21.02, humidity:19.42, growth:7},
  { name: "User3", date:0105, time:0000, temperature:22.03, humidity:18.15, growth:9},
  { name: "User3", date:0201, time:0000, temperature:21.65, humidity:17.62, growth:12},
  { name: "User3", date:0202, time:0000, temperature:22.67, humidity:18.63, growth:14},
  { name: "User3", date:0203, time:0000, temperature:23.16, humidity:17.42, growth:16},
  { name: "User3", date:0204, time:0000, temperature:21.95, humidity:19.75, growth:17},
  { name: "User3", date:0205, time:0000, temperature:22.34, humidity:18.85, growth:19},
  { name: "User3", date:0301, time:0000, temperature:21.95, humidity:17.62, growth:22},
  { name: "User3", date:0302, time:0000, temperature:22.24, humidity:18.12, growth:24},
  { name: "User3", date:0303, time:0000, temperature:23.61, humidity:17.61, growth:26},
  { name: "User3", date:0304, time:0000, temperature:21.52, humidity:19.52, growth:27},
  { name: "User3", date:0305, time:0000, temperature:22.48, humidity:18.35, growth:29},
];

// request param X, response O
app.get("/api/anywhereFarm", (req, res) => {
  res.json({ok:true, anywhereFarm:anywhereFarm});
});

// 사용자별 데이터 확인_TEST (PATH parameter, request param O, response O)
app.get("/api/anywhereFarm/:user_name", (req, res) => {
  const user_name = req.params.user_name
  const user = anywhereFarm.filter(data => data.name == user_name);
  res.json({ok:false, anywhereFarm:user});
});

// 사용자별 데이터 확인 (PATH parameter, request param O, response O)
app.get("/api/anywhereFarm/name/:user_name", (req, res) => {
  const user_name = req.params.user_name
  const user = anywhereFarm.filter(data => data.name == user_name);
  res.json({ok:false, anywhereFarm:user});
});

// 일차별 데이터 확인_TEST (PATH parameter, request param O, response O)
app.get("/api/anywhereFarm/date/:user_date", (req, res) => {
  const user_date = req.params.user_date
  const date = anywhereFarm.filter(data => data.date == user_date);
  res.json({ok:false, anywhereFarm:date});
});

module.exports = app;
