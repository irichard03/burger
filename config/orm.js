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
        });
    },

    //TODO insertOne

    //TODO updateOne


};

module.exports = orm;