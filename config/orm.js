const connection = require('connection');



const orm = {
    //method for selecting all rows in the database, callback for results.
    selectAll: function(column1,table,callback) {
        let myQuery = "SELECT ?? FROM ??;";
        connection.query(myQuery,[column1,table],function(err,result){
            if(err){
                throw(err);
            }
            callback(result);
        });
    },

    //TODO insertOne

    //TODO updateOne


}

module.exports = orm;