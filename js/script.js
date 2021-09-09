
$(document).ready(function () {

    var owl = $('.owl-test');
    owl.owlCarousel({
        autoplay: true,
        autoplayhover: true,
        autoplaytimeout: 100,
        loop: true,
        responsive: {

            0: {
                items: 1,
                margin: 8,
            },
            1000: {
                items: 1
            }
        }
    });

    var owl1 = $('.owl-spec');
    owl1.owlCarousel({
        autoplay: true,
        margin: 20,
        dots: false,
        nav: true,
        loop: true,
        responsive: {

            0: {
                items: 1,
                margin: 6,

            },
            1000: {
                items: 5
            }
        }
    });



    var owl2 = $('.owl-bestseller');
    owl2.owlCarousel({
        autoplay: true,
        margin: 20,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 6,

            },
            1000: {
                items: 5
            }
        }
    });



});









