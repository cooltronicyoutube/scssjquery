$( document ).ready(function() {
    console.log( "ready!" );
    onscroll();
    $(window).on('scroll', onscroll)
    dummy_contact();
    function onscroll(){
      var scrolled = $(window).scrollTop();
      var win_height=$(window).height()*0.95; //quick fix
      $(".margin-right, .margin-left").each(function ()
      {
        offsetTop=$(this).offset().top;
        if (scrolled + win_height > offsetTop)
        {
          $(this).removeClass('margin-right');
          $(this).removeClass('margin-left');
          print = JSON.stringify($(this));
          console.log('animated: '+ print);
        }
      }
    );
    }
    function dummy_contact(){
      var form=$("#contact .contact_form");
      var button=$("#contact .contact_form button");
      form.on("submit", function(e){
        e.preventDefault();
        var name=form.find(".name").val();
        var email=form.find(".mail").val();
        var body=form.find(".body").val();
        alert("Mail w alert, Nazwa: " + name +" Adres email:" + email + " Treść: "+ body);
      }
    );
    }
    $('a[href*="#"]').click(function (event) {
      var selected = '#'+$(this).attr('href').split('#')[1];
      if ($(selected).length) {
        event.preventDefault();
        distance = $(selected).offset().top;
        console.log('distance: '+distance);
        $('html, body').animate({scrollTop: distance}, 750);
      }
    });
    $(window).on('scroll', function() {
      if($(window).scrollTop()> 50){
        $('#nav').addClass('stick');
      }
    });
});
