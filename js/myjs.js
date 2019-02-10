$(document).ready(function(){
    $(".navigation").on('click', function(event) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-70
            }, 700, function(){
            });
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 790 || document.documentElement.scrollTop > 790) {
        document.getElementById("arrow").style.display = "block";
    } else {
        document.getElementById("arrow").style.display = "none";
    }
}

function topFunction() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 700, function(){
    });
}