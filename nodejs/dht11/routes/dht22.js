const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

var SensorDataSchema = mongoose.Schema({
  humidity:Number,
  temperature:Number,
  date: { type: Date, default: Date.now }
},
  {
    collection : 'sensorData'
});

var SensorData = mongoose.model('sensorDatabase', SensorDataSchema)

router.post('/sensorData', function(req, res, next){
  console.log(req.body);
  var tempData;
  global.tempData = req.body;
  res.send(req.body);
});

router.get('/sensorData/test', (req, res) => {
  res.send(tempData);
});

router.post('/sensorData/insert', function(req, res, next) {
      var humidity = tempData.humidity;
      var temperature = tempData.temperature;
      var sensorData = new SensorData({'humidity':humidity,'temperature':temperature});

      sensorData.save(function(err,silence){
             if(err){
                console.log(err);
                res.status(500).send('update error');
                return;
             }
             res.status(200).send("Inserted");
         });
});

module.exports = router;
