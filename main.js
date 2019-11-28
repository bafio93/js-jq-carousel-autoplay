$(document).ready(function(){
    // Arrow Left section:
    function scroll_left() {
        var current_img = $("img.active");
        var current_dot = $("i.active");
        var prev_img = current_img.prev("img");
        var prev_dot = current_dot.prev("i");
        if (prev_img.length==0) {
            prev_img = $("img:last-child");
            prev_dot = $(".dots-container i:last-child");
        }
        current_img.removeClass("active");
        prev_img.addClass("active");
        current_dot.removeClass("active");
        prev_dot.addClass("active");
    }
    $("i.fa-arrow-circle-left").click(scroll_left);
    // Arrow Right section:
    function scroll_right() {
        var current_img = $("img.active");
        var current_dot = $("i.active");
        var next_img = current_img.next("img");
        var next_dot = current_dot.next("i");
        if (next_img.length==0) {
            next_img = $("img:first-child");
            next_dot = $(".dots-container i:first-child")
        }
        current_img.removeClass("active");
        next_img.addClass("active");
        current_dot.removeClass("active");
        next_dot.addClass("active");
    }
    $("i.fa-arrow-circle-right").click(scroll_right);
    // Automatic scroll every 3s.
    var clock = setInterval(scroll_right, 3000);
    scroll_right();
});

//  {
//     var current_img = $("img.active");
//     var next_img = current_img.next("img");
//     if (next_img.length==0) {
//         next_img = $("img:first-child");
//     }
//     current_img.removeClass("active");
//     next_img.addClass("active");
// }, 3000);
