$(document).ready(function() {

    var heightWindow = $(window).innerHeight();
    var heightHomeBanner = $("#banner").innerHeight();
    var heightHomeAction = $("#action").innerHeight();
    var scrollToHomeDataTop = heightHomeBanner + heightHomeAction - heightWindow * 0.7;

    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll >= scrollToHomeDataTop) {
            $("#solieu .col1").addClass("active");
        } else {
            $("#solieu .col1").removeClass("active");
        }
    });

    $('nav a').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;

    })


    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            // $('nav').addClass('fixed');
            $('#main section').each(function(i) {
                if ($(this).position().top <= windscroll - 20) {
                    $('nav li.active').removeClass('active');
                    $('nav li').eq(i).addClass('active');
                }
            });

        } else {

            // $('nav').removeClass('fixed');
            $('nav li.active').removeClass('active');
            $('nav li:first').addClass('active');
        }

    }).scroll();

    $("#tab a").click(function() {

    });

    $("a.btn-light").click(function() {
        $('#tab .first').removeClass('active');
        // $('#tab .first').addClass('active'); 
    });
});