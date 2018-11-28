$(function(){

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#burgerAdd").val().trim(),
            devoured: 0
        };
        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("Added Burger!");
            location.reload();
            }
        );
        
    });

    $(".deleteButton").click(function(event) {
        let id = $(this).data("id");
        let eatenStatus = 1;

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenStatus
        }).then(
            function() {
            location.reload();
            }
        );
        
    });

});