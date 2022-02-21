  
  $(function(){

  var $hero = jQuery('#hero'),
        $laser = $hero.find('.laser');

        function scan()
        {
            $hero.removeClass('idle').addClass('attackk');
            $laser.addClass('laser');

            setTimeout(function (){
                $hero.removeClass('attackk').addClass('idle');
                $laser.removeClass('laser');
            },3000);
        }
        setInterval(scan, 5000);
})