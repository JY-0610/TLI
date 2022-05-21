'use strict';



  
$('html').css({'overflow-y':'hidden','height':'100%'})
$('#main').on('scroll touchmove mousewheel', function(e) {

e.preventDefault();
var $selector = $(this); 
var wheel = e.originalEvent.wheelDelta;
var scrollTop = $(window).scrollTop();
var width = $selector.width();
var height = $selector.height();
var page = $('.page-wrap').offset().top;
var min = $selector.offset().top - $(window).height();
var max = $selector.offset().top + $selector.outerHeight();
var scale = (((scrollTop - min)  * 2 ) / (max - min)) + 5;
var scale2 = (((scrollTop - width))  / (height - min)) + 1.17;


if(wheel > 0){ 
  moveUp();

   
  } else { 
    moveDown();
    

 }
 function moveUp(){
   
  $('.bg-effect').css({'transform': 'scale(' + -scale + ')'}).animate({'opacity':'0'}).removeClass('hidden');
  $('.move-1').animate({'opacity':'0'});
  $('.move-2').animate({'opacity':'1'},1000);
  $('.main-bg').addClass('on');
  $('.main-bg2').css({'transform': 'scale(' + (scale2 + 1)  + ')' });
  $('.move-2').css({'transform': 'scale(' + (scale /  8 )  + ')' })



 } 
 function moveDown(){
   
  $('.bg-effect').css({'transform': 'scale(' + scale + ')'}).animate({'opacity':'0'}).addClass('hidden');
  $('.move-1').animate({'opacity':'0'});
  $('.move-2').animate({'opacity':'1'},1000);
  $('.main-bg').addClass('on');
  $('.main-bg2').css({'transform': 'scale(' + (scale2 + 1)  + ')' });
  $('.move-2').css({'transform': 'scale(' + (scale /  8 )  + ')' })



 }


});


// section3
var $selector = $(this);
var numImage =$('.section3 ul.slide li');
var numText =$('.section3 ul.txt-slide li');

$('button.prev').on('click', function() {
  slideLeft();

});

$('button.next').on('click', function() {

  slideRight();
 

});
  

function slideLeft() {
  var leftImage =  $('.section3 ul.slide li').last();
  var  leftText = $('.section3 ul.txt-slide li').last();
  $('.section3 ul.slide').prepend(leftImage); 
  $('.section3 ul.txt-slide').prepend(leftText); 
  $('.section3 ul.slide  li').addClass('slide3d')
  $('.section3 ul.slide li:eq(1)').removeClass('slide3d');
  $('.section3 ul.txt-slide li:eq(1) strong').addClass('on');
  $('.section3 ul.txt-slide li p').addClass('show');
  $('.section3 ul.txt-slide li:eq(1) p').removeClass('show');

    
}


    
function slideRight() {
  var rightImage =  $('.section3 ul.slide li').first();
  var rightText = $('.section3 ul.txt-slide li').first();
  $('.section3 ul.slide').append(rightImage); 
  $('.section3 ul.txt-slide').append(rightText); 
  $('.section3 ul.slide  li').addClass('slide3d')
  $('.section3 ul.slide li:eq(1)').removeClass('slide3d');
  $('.section3 ul.txt-slide li:eq(1) strong').addClass('on');
  $('.section3 ul.txt-slide li p').addClass('show');
  $('.section3 ul.txt-slide li:eq(1) p').removeClass('show');

    
}


    // section4 
    var sec4 = $('.section4 ul li');
    $(sec4).on('mousemove',function(){
      $(this).find('.sub-txt').css({'opacity':'1'}).addClass('on');
     

    });
    $(sec4).on('mouseleave',function(){
      $('.section4 .sub-txt').css({'opacity':'0'}).removeClass('on');
     
    });
