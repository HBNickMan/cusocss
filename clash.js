(function () {

    var slideContainer = $('.slide-container');

        slideContainer.slick({
        autoplay: true,
        dots: false,
        arrows: true
    });

    $('.clash__card__image img').hide();
    $('.slick-active').find('.clash__card__image img').fadeIn(200);

    // On before slide change
    slideContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slick-active').find('.clash__card__image img').fadeOut(1000);
    });

    // On after slide change
    slideContainer.on('afterChange', function (event, slick, currentSlide) {
        $('.slick-active').find('.clash__card__image img').fadeIn(200);
    });

})();