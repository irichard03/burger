const connection = require('../config/connection.js');


//THE ORM  CONTROLS MY QUERIES.
const orm = {
    //method for selecting all rows in the database, callback for results.
    selectAll: function(column,column2,column3,table,callback) {
        let myQuery = "SELECT ??, ??, ?? FROM ??;";
        connection.query(myQuery,[column, column2,column3, table],function(err,result){
            if(err){
                throw(err);
            }
            callback(result);
        });
    },

    //This is the orm from cat js copied just to see if I can get it to work with straight refactoring.

    create: function(table,burgerName,isEaten, callback) {
        let queryString = "INSERT INTO " + table + " (burger_name,devoured) VALUES( '" + burgerName + "', '" + isEaten + "');";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
        callback(result);
        });

    },
    
    update: function(table,burgerId,callback){
        let queryString = "UPDATE " + table + " SET devoured = 0 WHERE id = " + burgerId + " ;";
        connection.query(queryString, function(err,result){
            if(err) {
                throw err;
            }
            callback(result);
        });
    },
};

module.exports = orm;