$( document ).ready(function() {
  
  var whichToShow = Math.floor(Math.random() * $('.ClientLogos p').length);

$('.ClientLogos p').hide().eq(whichToShow).fadeIn(300);
  
  });