const {
    creatPool} = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ecom"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });