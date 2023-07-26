// when the document ready start this function

$(document).ready(function(){
    // event listener for "data-role" elements
    
    $("[data-role]").on("click", function(){
        // get the role attribute of a clicked element ESO <3
        var role = $(this).attr("data-role");

        // checked the role 
        switch(role){
            // if role is toggler
            case "toggler":
                // go to toggler function with tihs as object
                toggler(this);
                break;
        }
    })
})

function toggler(object){
    // get clicked elemetns target attribute
    let target = $(object).attr("data-target");

    
    $(object).toggleClass("active");
    $(target).toggleClass("active");
}