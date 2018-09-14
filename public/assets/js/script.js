alert("connected")

$(document).ready(function(){
    
    $(".devour-form").on("submit", function(event){

        event.preventDefault()

        $.ajax({
            method: "PUT",
            url: "/api/update-burger/"+this.children[0].value
        }
        ).then(
            function(res){
                location.reload();
            }
        )

    })

    $(".add_burger").on("submit", function(event){

        event.preventDefault()

        alert("Add")
        
        var newBurger = {
            name: $("#new_burger").val().trim(),
          };

          console.log(newBurger)

        $.post("/api/add-burger", newBurger)
        .then(function(){

        })

        $("#new_burger").val("");
    })

})