var express    =  require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mymysql1.cf7sh9xvzxfq.ap-northeast-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'abcd1234',
  database : 'yam'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");
} else {
    console.log("Error connecting database ... \n\n");
}
});

app.get("/",function(request,response){
connection.query('SELECT * from history_data', function(err, rows, fields) {
connection.end();
  if (!err){
    response.send(rows);
    console.log('The solution is: ', rows);
  }
  else
    console.log('Error while performing Query.');
  });
});

app.listen(8080);
