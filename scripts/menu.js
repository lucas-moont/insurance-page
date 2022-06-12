function openMenu(){
    document.querySelector(".menu").style.left = '0vw'
}

function closeMenu(){
    document.querySelector(".menu").style.left = '-100vw'
}

jQuery(document).ready(function($){
    var menu = document.getElementById(".menu")

    //Verifica se o usuário rola a tela do celular e conserta o display do menu.
    window.addEventListener("orientationchange", function(){
        if($(window).width() <= 750 && menu.style.left == '-100vw'){
            menu.style.left = '0vw';
        }else if($(window).width() >= 750 && menu.style.left =='0vw'){
            menu.style.left = '-100vw'
        }
    })

    //esconde o menu quando os links são clicados
    let links = document.querySelectorAll("nav ul li a");
    links.forEach(item => {
        item.addEventListener('click', function(){
            if($(window).width() <= 750){
                closeMenu();
            }
        })
    })
});