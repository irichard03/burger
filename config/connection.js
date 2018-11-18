require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if(err) {
        console.error("could not connect to database: "  + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;