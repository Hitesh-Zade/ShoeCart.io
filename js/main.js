  // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

   //scroll Animation

   var controller = new ScrollMagic.Controller();
   var scene = new ScrollMagic.Scene({
       triggerElement:'.services'
   })


   // mail
   $(document).ready(function() {
    $('#contact-form').submit(function(e) {
      var name    = document.getElementById('inputName')
      var email   = document.getElementById('inputEmail')
      var message = document.getElementById('inputMessage')
  
      if (!name.value || !email.value || !message.value) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/hiteshzade26@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
      }
    });
  });