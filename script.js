// navbar
// 


// card slider
$(".carousel").ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
    });
});

function prevSlide() {
    $('.carousel').slick('slickPrev');
}

function nextSlide() {
    $('.carousel').slick('slickNext');
}

$(".fa-arrow-right").click(nextSlide)
$(".fa-arrow-left").click(prevSlide)