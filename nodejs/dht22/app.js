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

const mongoose = require('mongoose');

mongoose.connect('mongodb://52.78.234.238:27017/dht22');

var dht22 = require('./routes/dht22.js');
app.use('/', dht22);;

app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});
