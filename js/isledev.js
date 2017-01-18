
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(".nav-main ul a:nth-child(1)").click(function(){
  $('html, body').animate({
    scrollTop: 0}, 1500, 'easeInOutExpo');
});

$(".nav-main ul a:nth-child(2)").click(function(){
  $('html, body').animate({
    scrollTop: $("#about").offset().top}, 1500, 'easeInOutExpo');
});

$(".nav-main ul a:nth-child(3)").click(function(){
  $('html, body').animate({
    scrollTop: 0}, 1500, 'easeInOutExpo');
});

$(".nav-main ul a:nth-child(4)").click(function(){
  $('html, body').animate({
    scrollTop: $("#skills").offset().top}, 1500, 'easeInOutExpo');
});

$(".nav-main ul a:nth-child(5)").click(function(){
  $('html, body').animate({
    scrollTop: $("#contact").offset().top}, 1500, 'easeInOutExpo');
});

var aboutPos = $('#about').position();
var skillPos = $('#skills').position();
var contactPos = $('#contact').position();
window.addEventListener("scroll", function(event) {

    var top = this.scrollY,
        left = this.scrollX;

    var horizontalScroll = document.querySelector(".horizontalScroll"),
        verticalScroll = document.querySelector(".verticalScroll");

    if(top >= aboutPos.top) {
      $('.navheader').addClass('nav-coll');
    } else {
      $('.navheader').removeClass('nav-coll');
    }

    if(top < aboutPos.top){
      $('.nav-main ul a:nth-child(1)').addClass('nav-hover');
    }else {
      $('.nav-main ul a:nth-child(1)').removeClass('nav-hover');
    }

    if(top >= aboutPos.top && top < skillPos.top){
      $('.nav-main ul a:nth-child(2)').addClass('nav-hover');
    }else {
      $('.nav-main ul a:nth-child(2)').removeClass('nav-hover');
    }
    if(top >= skillPos.top && top < contactPos.top){
      $('.nav-main ul a:nth-child(4)').addClass('nav-hover');
    } else {
      $('.nav-main ul a:nth-child(4)').removeClass('nav-hover');
    }
    if(top >= contactPos.top){
      $('.nav-main ul a:nth-child(5)').addClass('nav-hover');
    } else {
      $('.nav-main ul a:nth-child(5)').removeClass('nav-hover');
    }

}, false);


var windowWidth = $(window).width();
if(windowWidth >= 768) {
  $('.bars').addClass('hidden');
  $('.nav-main').removeClass('hidden');
}
else {
  $('.bars').removeClass('hidden');
  $('.nav-main').addClass('hidden');
}


$(window).resize(function() {
  var windowWidth = $(window).width();
  if(windowWidth >= 768) {
    $('.bars').addClass('hidden');
    $('.nav-main').removeClass('hidden');
  }
  else {
    $('.bars').removeClass('hidden');
    $('.nav-main').addClass('hidden');
  }
});

$('.bars').click(function() {
  if(!$('.nav-main').hasClass('hidden')) {
    $('.nav-main').toggle('slide');
    $('.bars').toggleClass('bars-selected');
  }else {
    $('.nav-main').toggleClass('hidden');
    $('.bars').toggleClass('bars-selected');
  }
});
