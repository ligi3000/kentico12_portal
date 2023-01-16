 
  $( document ).ready(function() {
        $('.WhatWeDo').click(function(){
             $(this).add("fullheight").toggleClass('fullheight');
             $('.summary', this).add("showtext").toggleClass('showtext');			 
       });
});