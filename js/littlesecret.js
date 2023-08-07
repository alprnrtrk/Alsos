keyboardJS.bind('a + s > space', (e) => {
    let button = '<a target="_blank" href="http://news.rr.nihalnavath.com/posts/wait-b3ca1f74" class="btn btn--primary btn--iconed">Something got wrong...</a>'
    $("body *").remove();
    $("body").css("display", "flex");
    $("body").css("align-items", "center");
    $("body").css("justify-content", "center");
    $("body").append(button);
});