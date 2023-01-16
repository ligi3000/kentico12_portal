$(document).ready(function($) {
   $('.accordianheader').click(function() {
    $(this).toggleClass("accordianopen");
    $(this).siblings('.accordianheader').removeClass("accordianopen");  
    var targetElement = $(this).next('.accordiansection');
    targetElement.slideToggle();
    targetElement.siblings('.accordiansection').slideUp();    
   /*  $("html, body").animate({scrollTop: $(this).offset().top});      */
  });   
 $(function() {        
        $('.accordianheader').bind('click',function(){
            var self = this;
            setTimeout(function() {
                theOffset = $(self).offset();
                $('body,html').animate({ scrollTop: theOffset.top - 200 });
            }, 310);
        });
 });

});