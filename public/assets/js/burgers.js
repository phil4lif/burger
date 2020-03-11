$(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
        console.log("submit")
        var newBurger = {
            name: $("#bu").val().trim(),
            devoured: false
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("added a new burger");
                location.reload();
            }
        );
    });
    $(".devbutton").on("click", function(event) {
        var id = $(this).data("id");
        var newDev = $(this).data("newdev");
        var newDevState = {
            devoured: newDev
        };
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newDevState
        }).then(
            function() {
                console.log("changed devoured to", newDev);
                location.reload();
            }
        )
    })
});