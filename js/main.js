console.log('ok');
$(document).ready(function() {
    $('.idea-slider-wrap').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="./img/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="./img/prev.svg" alt="prev arrow"></button>',
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        slidesToShow: 3,
        dotsClass: 'custom_paging',
        customPaging: function(slider, i) {
            console.log(slider);
            return (i + 1) + '/' + slider.slideCount;
        }

    });
});