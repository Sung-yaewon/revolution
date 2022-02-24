const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const users = [
  { id:1, name: "User1"},
  { id:2, name: "User2"},
  { id:3, name: "User3"},
];
const anywhereFarm = [
  { name: "User1", date:1, temperature:27.06, humidity:22.00, growth:3},
  { name: "User1", date:2, temperature:26.05, humidity:23.05, growth:7},
  { name: "User1", date:3, temperature:27.58, humidity:22.75, growth:9},
  { name: "User1", date:4, temperature:24.26, humidity:22.06, growth:13},
  { name: "User1", date:5, temperature:28.15, humidity:23.15, growth:17},
  { name: "User2", date:1, temperature:17.06, humidity:15.51, growth:1},
  { name: "User2", date:2, temperature:17.07, humidity:14.35, growth:3},
  { name: "User2", date:3, temperature:16.28, humidity:15.52, growth:4},
  { name: "User2", date:4, temperature:18.06, humidity:14.05, growth:5},
  { name: "User2", date:5, temperature:17.32, humidity:13.95, growth:6},
  { name: "User3", date:1, temperature:21.02, humidity:17.25, growth:2},
  { name: "User3", date:2, temperature:22.85, humidity:18.05, growth:4},
  { name: "User3", date:3, temperature:23.01, humidity:17.06, growth:6},
  { name: "User3", date:4, temperature:21.02, humidity:19.02, growth:7},
  { name: "User3", date:5, temperature:22.03, humidity:18.25, growth:9},
];

// request param X, response O
app.get("/api/anywhereFarm", (req, res) => {
  res.json({ok:true, anywhereFarm:anywhereFarm});
});

// Query parameter, request param O, response O
app.get("/api/anywhereFarm/Monitoring", (req, res) => {
  const user_name = req.query.user_name
  const user = anywhereFarm.filter(data => data.name == user_name);
  res.json({ok:false, anywhereFarm:user});
});

// PATH parameter, request param O, response O
app.get("/api/anywhereFarm/:user_name", (req, res) => {
  const user_name = req.params.user_name
  const user = anywhereFarm.filter(data => data.name == user_name);
  res.json({ok:false, anywhereFarm:user});
});

// Query parameter, request param O, response O
app.get("/api/users/user", (req, res) => {
  const user_id = req.query.user_id
  const user = users.filter(data => data.id == user_id);
  res.json({ok:false, users:user});
});

// PATH parameter, request param O, response O
app.get("/api/users/:user_id", (req, res) => {
  const user_id = req.params.user_id
  const user = users.filter(data => data.id == user_id);
  res.json({ok:false, users:user});
});

// POST, request body, response O
app.post("/api/users/userBody", (req, res) => {
  const user_id = req.body.id
  const user = users.filter(data => data.id == user_id);
  res.json({ok:true, users:user});
});

// POST, request body, response O
app.post("/api/users/add", (req, res) => {
  const { id, name } = req.body
  const user = users.concat({id, name});
  res.json({ok:true, users:user});
});

// put, request body, response O
app.put("/api/user/update", (req, res) => {
  const { id, name } = req.body
  const user = users.map(data => {
    if(data.id == id) data.name = name
    return {
      id : data.id,
      name : data.name
    }
  })
  res.json({ok:true, users:user});
});

// patch, request path param & body, response O
app.patch("/api/user/update/:user_id", (req, res) => {
  const { user_id } = req.params
  const { name } = req.body
  const user = users.map(data => {
    if(data.id == user_id) data.name = name
    return {
      id : data.id,
      name : data.name
    }
  })
  res.json({ok:true, users:user});
})

// delete, request body, response O
app.delete("/api/user/delete", (req, res) => {
  const { user_id } = req.body
  const user = users.filter(data => data.id != user_id);
  res.json({ok:true, users:user});
})

module.exports = app;
