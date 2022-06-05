var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3307',
  database: 'restaurants_distance',
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log('DB connection failed');
  } else {
    console.log('DB connected');
  }
});

module.exports = mysqlConnection;
