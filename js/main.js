speed = 15;
log = $("#code").text();
i = 0;

$("body").append("<header class='header'><div class='container'><h1 class='header__title'></h1><p class='header__text'></p></div></header><nav><div class='container'><div class='toggle'><i class='fa fa-bars menu' aria-hidden = 'true'></i></div><ul class='nav_list'><li class='nav__item'><a class='nav__link home_page' href='#'></a></li><li class='nav__item'><a class='nav__link meals_page' href='#'></a></li><li class='nav__item'><a class='nav__link salads_page' href='#'></a></li><li class='nav__item'><a class='nav__link deserts_page' href='#'></a></li><li class='nav__item'><a class='nav__link drinks_page' href='#'></a></li></ul></div></nav><section class='meals__section'><div class='container'><ul class='meals__list'><li class='meals__item'><div class='meals__item-img kfc__img'></div><h2 class='meals'></h2><h3><a class='kfc__running' href='#'></a></h3><p class='kfc__description'></p></li><li class='meals__item'><div class='meals__item-img dulma__img'></div><h2 class='meals'></h2><h3><a class='dulma__running' href='#'></a></h3><p class='dulma__description'></p></li><li class='meals__item'><div class='meals__item-img moxito__img'></div><h2 class='drinks'></h2><h3><a class='moxito__running' href='#'></a></h3><p class='moxito__description'></p></li><li class='meals__item'><div class='meals__item-img vafli__img'></div><h2 class='deserts'></h2><h3><a class='vafli__running' href='#'></a></h3><p class='vafli__description'></p></li><li class='meals__item'><div class='meals__item-img salat__img'></div><h2 class='salads'></h2><h3><a class='shuba__running' href='#'></a></h3><p class='shuba__description'></p></li><li class='meals__item'><div class='meals__item-img chizkeyk__img'></div><h2 class='deserts'></h2><h3><a class='chizkeyk__running' href='#'></a></h3><p class='chizkeyk__description'></p></li></ul><div class='retsepts_box'><a class='retsepts__link' href='#'></a></div></div></section><pre id='code-box'></pre>");

			
var tick = setInterval(function() {
    if(i >= log.length){
        clearInterval(tick);
        setTimeout(function(){
            $("#code-box").fadeOut("slow");
        }, 3000);
    }
    $("#style-box").append(log[i]);
    $("#code-box").append(log[i++]);
    $('#code-box').html($('#code-box').html().replace(/(\:(.*?)\ ;)/g, ':<em class="value">$2</em>;'));
    $('#code-box').html($('#code-box').html().replace(/(\/\*(.*?)\*\*\/)/g, '<em class="comment">/*$2*/</em>'));
    var o = document.getElementById("code-box");
    o.scrollTop = o.scrollHeight;
    
    
    
    
}, speed);

