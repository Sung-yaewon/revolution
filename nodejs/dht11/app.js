const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://abc:<password>@cluster0.u4mdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//  client.close();
//});

//const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://abc:1234@cluster0.u4mdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/dht11');

const mongoAtlasUri =
  "mongodb+srv://abc:1234@cluster0.u4mdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/dht11";

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

var dht11 = require('./routes/dht11.js');
app.use('/', dht11);;

app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});
