$(document).on('ready', function(){
$(".autoplay").slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 4000,
draggable:false,//disables draggable per mouse
nextArrow:false,
prevArrow:false,//disables arrows and closes gap to header, cannot be disabled with css
});
});
