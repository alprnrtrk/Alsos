// when the document ready start this function
$(document).ready(function () {
    // event listener for "data-role" elementss
    $("[data-role]").on("click", function () {
        // get the role attribute of a clicked element
        var role = $(this).attr("data-role");
        // checked the role 
        switch (role) {
            // if role is toggler
            case "toggler":
                // go to toggler function with tihs as object
                toggler(this);
                break;
            case "playPause":
                playPause(this);
                break;
            case "filter":
                filter(this);
                break;
            case "filterNormal":
                filterNormal(this);
                break;
            case "subFilter":
                subFilter(this);
                break;
        }
    })
})
function toggler(object) {
    // get clicked elemetns target attribute
    let target = $(object).attr("data-target");
    $(object).toggleClass("active");
    $(target).toggleClass("active");
}
// play and stop videos
function playPause(object) {
    // get clicked elemetns target attribute
    let target = $(object).attr("data-target");
    if ($(target).get(0).paused) {
        $(object).find("img").attr("src", "img/icons/pause.svg"); 6
        $(target).trigger('play');
    } else {
        $(object).find("img").attr("src", "img/icons/play.svg");
        $(target).trigger('pause');
    }
}

function filterNormal(object) {
    let target = $(object).attr("data-target");
    let group = $(object).attr("data-value");
    $(group).removeClass("active");
    $('[data-role = "filterNormal"]').removeClass("active");
    $(object).addClass("active");

    $(target).addClass("active");
}

function filter(object) {
    let target = $(object).attr("data-target");
    let group = $(object).attr("data-value");
    $(group).removeClass("active");
    $('[data-role = "filter"]').removeClass("active");
    $(object).addClass("active");

    if ($('[data-target="done"]').hasClass("active")) {
        $('[data-id="' + target + '"][data-status="done"]').addClass("active");
        console.log("done");
    } else if ($('[data-target="ongoin"]').hasClass("active")) {
        $('[data-id="' + target + '"][data-status="ongoin"]').addClass("active");
        console.log("ongoin");
    }
}

function subFilter(object) {
    $('[data-role = "subFilter"]').removeClass("active");
    $(object).addClass("active");

    $('[data-role="filter"].active').click();
}
