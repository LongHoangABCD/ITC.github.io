$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    autoplay:true,
    autoplaySpeed:1500,
    initialSlide: 1,
    pauseOnHover: false,
    fade: true
});
$('.slide-right').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    autoplay:true,
    autoplaySpeed:2500,
    initialSlide: 1,
    pauseOnHover: false,
    fade: true
});

$('.standar-block').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    autoplay:true,
    autoplaySpeed:2500,
    initialSlide: 0,
    pauseOnHover: false,
});

$('.standar-block-two').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    autoplay: true,
    autoplaySpeed:1500,
    initialSlide: 0,
    pauseOnHover: false,
});

$('.standar-block-three').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    autoplay: true,
    autoplaySpeed:2000,
    initialSlide: 0,
    pauseOnHover: false,
});

$('.block-action').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    autoplay: true,
    autoplaySpeed:2000,
    initialSlide: 0,
    pauseOnHover: false,
});

$('.standar-block-four').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    autoplay: true,
    autoplaySpeed:2000,
    initialSlide: 0,
    pauseOnHover: false,
});

$('.standar-block-book').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    autoplay: true,
    autoplaySpeed:2000,
    initialSlide: 0,
    pauseOnHover: false,
});



window.onscroll = function() {
  scroll();
}

function scroll() {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.querySelector(".responsive-header").style.top = "0";
        document.querySelector(".back-to-top").style.right = "2rem";
    }else{
        document.querySelector(".responsive-header").style.top = "-88px";
        document.querySelector(".back-to-top").style.right = "-5rem";
    }
}

$(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
})

