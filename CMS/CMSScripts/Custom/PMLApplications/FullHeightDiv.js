$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.MainImage').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});