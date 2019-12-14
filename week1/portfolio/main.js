//loading page



//end loading page
$(document).ready(function () {
$('.menu-toggler').on('click',function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
});
AOS.init({
    easing:'ease',
    duration:1800
});
//typed
var typed = new Typed(".element", {
    strings: [" web Developer"],
   typeSpeed:50,
   backSpeed:50,
   loop:true
  });





//skills
$(".html").animate({width:"70%"},2000);
$(".js").animate({width:"40%"},2000);
$(".boot").animate({width:"65%"},2000);
$(".php").animate({width:"40%"},2000);
$(".woo").animate({width:"60%"},2000);
$(".seo").animate({width:"70%"},2000);

});