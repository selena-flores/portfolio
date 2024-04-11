var number = 0;
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        if(number > 0) number--;
    }
    else {
        number++;
    }
    var font_size = 50;
    var top = number * 5;
    $("#content").css({ top: top });
    $("#content").css({ 'font-size': font_size*Math.sin(3.14*top/window.innerHeight)})
    $("#number").text(Math.round(top/window.innerHeight * 100) + "%");
});