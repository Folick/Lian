$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:1,
  });
});

$(function(){
  $('.toggles button').click(function(){
    var get_id = this.id;
    var get_current = $('.posts .' + get_id);
    $('.block').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function(){
    $('.block').show(500);
  });
  $(" button").click(function(e) {
    e.preventDefault();
    $(".btn").removeClass(' active');
    $(this).addClass(' active');
  });
});