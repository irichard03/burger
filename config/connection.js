require('dotenv').config();
const mysql = require('mysql');

//Connection configures and conencts my database.

if(process.env.NODE_ENV === 'production'){
    mysql.createConnection(process.env.JAWSDB_URL);
    }
    else{
        mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'password',
            database: 'burgers_db'
        });
    }




connection.connect(function(err) {
    if(err) {
        console.error("could not connect to database: "  + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
  
});

module.exports = connection;