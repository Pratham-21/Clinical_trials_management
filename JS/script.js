 count=1;
 $(document).ready(function(){
     $('#menu').click(function(){
         count++;
       
         if(count%2==0)
         {   
           $(this).removeClass('fa-bars').addClass('fa-times');
         }
     else{
    
      $(this).removeClass('fa-times').addClass('fa-bars');
     }
         $('header').toggleClass('toggle');
     });

      $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

         if($(window).scrollTop()>0)
         {
           $('.top').show();
         }
         else
         {
          $('.top').hide();
         }
      });

      // smooth scrolling
      $('a[href*="#"]').click(function (e) {

        e.preventDefault();

        $('html,body').animate({

        scrollTop: $($(this).attr('href')).offset().top,

        },
        500,
        'linear'
        
        
        );
        
      });

 });