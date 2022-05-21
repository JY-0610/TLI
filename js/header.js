// menu button
$('#header .menu').on('click', function () {
  $('#header .menu').toggleClass('close');

});
$('#header .menu').on('click', function () {
  $('.sub').toggleClass('on');

});

$('').on('click', function () {

})



// 열기/닫기
$('.sub div.box > ul > li > a').on('click', function () {
  var height = 0;
  $(this).next().find('li').each(function () {
    $(this).css({'height': height + 100 + '%'}); 
    console.log($(this).html())
    
  });

$(this).find('i').eq(0).each(function(){
$(this).css({'opacity':'0','transition':'opacity 0.3s'})
  
})
})