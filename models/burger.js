const orm = require('../config/orm.js');

const burger = {
    selectAll : function(callback) {
        orm.selectAll("burger_name", "devoured", "id", "burgers",function(response){
        callback(response);
        });
    },

    create : function(burgerName, devoured, callback) {
        let isEaten = parseInt(devoured);
        orm.create("burgers",burgerName,isEaten, function(response){
        callback(response);
        });
    },

    //todo additional functions
    update : function(burgerId, callback){
        orm.update("burgers",burgerId,function(response){
            callback(response);
        });

    },
};

module.exports = burger;