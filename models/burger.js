
//our burger model implements the orm object methods
const orm = require('../config/orm.js');

//Here is our burger object, contains burger methods.
const burger = {
    //method takes in a callback function as argument
    //calls orm select all method passing column, table, and anon callback function.
    //then calls the callback that it received as an argument from..
    selectAll : function(callback) {
        orm.selectAll("burger_name", "devoured", "burgers",function(response){
        callback(response);
        });
    },

    create : function(callback) {
        orm.create("burger_name", "devoured", function(response){
        callback(response);
        });
    }

    //todo additional functions

};

module.exports = burger;