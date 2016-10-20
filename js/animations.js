$(document).ready(function(){
  //hides the tweet button div contanier
  $('#tweet-controls').hide();
  //this will resize the textbox and show the button
  $('.tweet-compose').on('click', function(){
    $('.tweet-compose').css('height', '5em');
    $('#tweet-controls').show();
  })
  $('#tweet-submit').on('click', function(){
    function charcount(cntVal){
      var len = cntVal.value.length;
      if(len >= 140){
        cntVal.value = cntVal.value.substring(0,140);
        $('.tweet-compose').text(cntVal);
        $('#char-count').text(500-len);
      }else{
        $('#char-count').text(500-len);
      }
    }
  });

});
