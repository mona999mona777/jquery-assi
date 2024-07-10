/// <reference types="../@types/jquery" />

// section-one
// widdth % for media query
$(".nav-open").on("click", function () {
  $(".nav-side").animate({ width: "20%" }, 500);
  $(".header-content").animate({ marginLeft: "20%" }, 500);
});

$(".closebtn").on("click", function () {
  $(".nav-side").animate({ width: "0" }, 500);
  $(".header-content").animate({ marginLeft: "0" }, 500);
});

$(".navside-link").on("click", function () {
  let section = this.getAttribute("href");
  let sectionOffSet = $(section).offset().top;
  $("body,html").animate({ scrollTop: sectionOffSet },2000);
});

// section-two
$(".accor h3").on("click", function () {
  let that = $(this).next();
  $(this).next().slideToggle(500);
  $(that).siblings(".myBrother").slideUp(500);
});

// anther methode but more longer
/* 
$('.accor .first').on('click',function(){
    $('.accor .div-first').slideToggle(500);
    $('.accor .div-first').siblings('div').slideUp(500)
})
$('.accor .second').on('click',function(){
    $('.accor .div-second').slideToggle(500);
    $('.accor .div-second').siblings('div').slideUp(500)
})
$('.accor .third').on('click',function(){
    $('.accor .div-third').slideToggle(500);
    $('.accor .div-third').siblings('div').slideUp(500)
})
$('.accor .fourth').on('click',function(){
    $('.accor .div-fourth').slideToggle(500);
    $('.accor .div-fourth').siblings('div').slideUp(500)
}) */

//  section-three
function showTimeDiffrence() {
  var past = new Date("2023-10-25").getTime();
  var now = new Date().getTime();
  let timeInSec = (past - now) / 1000;

  let day = Math.floor(timeInSec / (24 * 60 * 60));
  let dayInSec = day * (24 * 60 * 60);

  let hour = Math.floor((timeInSec - dayInSec) / (60 * 60));
  let hourInsec = hour * (60 * 60);

  let mint = Math.floor((timeInSec - (dayInSec + hourInsec)) / 60);
  let mintInSec = mint * 60;

  let sec = Math.floor(timeInSec - (dayInSec + hourInsec + mintInSec));

  $("#day").html(`${day} D`);
  $("#hour").html(`${hour} h`);
  $("#mint").html(`${mint} m`);
  $("#sec").html(`${sec} s`);
}
showTimeDiffrence();
var count = 0;
// change be every second so (1000)
var h = setInterval(function () {
  showTimeDiffrence();
}, 1000);

// section-four
$("#the-message span").html(100);
$("textarea").on("keyup", function () {
  let allLength = 100;
  let enteryLength = this.value.length;
  let currentLength = allLength - enteryLength;

  if (currentLength < 0) {
    $("#the-message span").html("your available character finished");
  } else {
    $("#the-message span").html(`${currentLength}`);
  }
});
