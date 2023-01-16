/*$(document).ready(function() {
        $('#one').click(function(){
             $('#one .text').add("expandtext").toggleClass('expandtext');
             $('#one .text .arrowup').add("rotate").toggleClass('rotate');
			 $('#one').add("hundredpercent").toggleClass('hundredpercent');
             $('#one img').add("thirtythreepercent").toggleClass('thirtythreepercent');
             $('#one .text').add("hundredpercent right").toggleClass('thirtythreepercent right');
       });
});

*/
  
  $( document ).ready(function() {
        $('.serviceimage').click(function(){
             $('.text', this).add("expandtext").toggleClass('expandtext');
             $('.text .arrowup', this).add("rotate").toggleClass('rotate');
			 $(this).add("hundredpercent").toggleClass('hundredpercent');
             $('img', this).add("thirtythreepercent").toggleClass('thirtythreepercent');
             $('.text', this).add("sixtysevenpercent right").toggleClass('sixtysevenpercent right');
       });
});