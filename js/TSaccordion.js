$(document).ready(function(){
  $('#aboutList h2').click(function(){
    $('#aboutList>div').slideUp();
    if( $(this).next().is(':hidden') ){
      $(this).next().slideDown();
    }
  });
});