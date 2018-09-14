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
                console.log(res)
                location.reload();
            }
        )

    })

})