//scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
    
$('#quickButton').click(function(e){
          
  if(!$('#quick-contact').hasClass('quickActive')) {
    $('#quick-contact').addClass('quickActive');
    $('#quickRight').addClass('displayBlock');
    
  } else {
    $('#quick-contact').removeClass('quickActive');
    $('#quickRight').removeClass('displayBlock');

  }     
});