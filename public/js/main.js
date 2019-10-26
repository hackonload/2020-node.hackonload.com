'use strict';
$(window).on('load', function() {
    $('.loader').delay(500).fadeOut('slow');
});


$(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    const wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();
    /* ==============================================
        STICKY HEADER
        =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    /* ------------------------------------- */
    /* Animated progress bars
     /* ------------------------------------- */

    const waypoints = $('.progress_container').waypoint(function () {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    }, {
        offset: '50%'
    });
});
