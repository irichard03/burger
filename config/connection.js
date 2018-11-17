require('dotenv').config();
const mysql = require('mysql');


if(process.env.NODE_ENV === 'production'){
    mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    databas: process.env.DATABASE
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