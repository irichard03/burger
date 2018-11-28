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
            // Reload the page to get the updated list
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
            console.log("BURGER " + id +  " NOM NOM!");
            // Reload the page to get the updated list
            
            }
        );
        
    });

});