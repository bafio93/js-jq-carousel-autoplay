$(document).ready(function(){
    // Arrow Left section:
    $("i.fa-arrow-circle-left").click(function(){
        var current_img = $("img.active");
        var current_dot = $("i.active");
        var prev_img = current_img.prev("img");
        var prev_dot = current_dot.prev("i");
        if (prev_img.length==0) {
            prev_img = $("img:last-child");
        }
        if (prev_dot.length==0) {
            prev_dot = $(".dots-container i:last-child");
        }
        current_img.removeClass("active");
        prev_img.addClass("active");
        current_dot.removeClass("active");
        prev_dot.addClass("active");
    })
    // Arrow Right section:
    $("i.fa-arrow-circle-right").click(function(){
        var current_img = $("img.active");
        var current_dot = $("i.active");
        var next_img = current_img.next("img");
        var next_dot = current_dot.next("i");
        if (next_img.length==0) {
            next_img = $("img:first-child");
        }
        if (next_dot.length==0) {
            next_dot = $(".dots-container i:first-child")
        }
        current_img.removeClass("active");
        next_img.addClass("active");
        current_dot.removeClass("active");
        next_dot.addClass("active");
    })
});
