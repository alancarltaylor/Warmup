$('button').on('click', function(){
   $('#imageToToggle').toggle();
});


$('input').on('keyup', function() {
  var value = $(this).val();
  $('p').text(value);
});
