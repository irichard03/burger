const connection = require('../config/connection.js');


//THE ORM  CONTROLS MY QUERIES.
const orm = {
    //method for selecting all rows in the database, callback for results.
    selectAll: function(column,column2,table,callback) {
        let myQuery = "SELECT ??, ?? FROM ??;";
        connection.query(myQuery,[column, column2,table],function(err,result){
            if(err){
                throw(err);
            }
            callback(result);
            console.log(result);
        });
    },

    //This is the orm from cat js copied just to see if I can get it to work with straight refactoring.

    create: function(val,val2, cb) {
        var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES( ?, ?);";
    

        connection.query(queryString, val, val2, function(err, result) {
          if (err) {
            throw err;
          }
    
        cb(result);
        });

    }
    //THIS IS MY function that throws error callback is not a function.
    /**
    create: function(value,value2, callback){
        let queryString = "INSERT INTO burgers (burger_name,devoured) VALUES(" + value + "," + value2 + ");";
        console.log(queryString);
        connection.query(queryString, value1, value2, function(err, result){
            
            if(err) {
                throw err;
            }   
            callback(result);
        });
    }
    **/
    //TODO insertOne

    //TODO updateOne


};

module.exports = orm;