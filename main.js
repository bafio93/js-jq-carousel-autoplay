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
    };
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
    };
    $("i.fa-arrow-circle-right").click(scroll_right);
    //Bonus: selecting images from dots:
    $(".dots-container i").click(function(){
        var clicked_index = $(".dots-container i").index(this);
        var current_img = $(".img-container img.active");
        var current_dot = $("i.active");
        var clicked_dot = $(".dots-container i").eq(parseInt(clicked_index));
        var clicked_img = $(".img-container img").eq(parseInt(clicked_index));
        current_img.removeClass("active");
        current_dot.removeClass("active");
        clicked_img.addClass("active");
        clicked_dot.addClass("active");
    });
    // Automatic scroll every 3s:
    var clock = setInterval(scroll_right, 3000);
    scroll_right();
});
