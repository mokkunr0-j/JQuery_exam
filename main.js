$(function(){
  $('.tab li')
  .on('click',function(){
    $('.tab li').removeClass('select')
    $(this).addClass('select')
    $('.prof li').addClass('hide');
    let index = $('.tab li').index($(this));
    $('.prof li').eq(index).removeClass('hide');
  });
});

$(function(){
  $('#accordion dd')
  .hide();
  $('#accordion dt')
  .on('click',function(){
    $(this).next('dd').slideToggle('slow');
  });
});
