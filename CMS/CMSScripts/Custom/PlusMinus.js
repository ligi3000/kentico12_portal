$(document).ready(function() {
  $('li img').click(function(){
    $(this).parent('li').each(function(){
      $('> ul', this).toggleClass("display"); 
		  $('> img', this).toggleClass('minus_icon')
          });  
      });  
 });      