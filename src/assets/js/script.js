window.onload = function () {
    var menuTodos = document.getElementById('menu-todos');
    var menuRomance = document.getElementById('menu-romance');
    var menuComedia = document.getElementById('menu-comedia');
    var menuDrama = document.getElementById('menu-drama');
    var menuAnime = document.getElementById('menu-anime');

    function cambiarEstilo(menu) {
        menu.setAttribute("style", "transform: scale(1.2)");
    }

    function reiniciarEstilo(menu) {
        menu.setAttribute("style", "transform: scale(1)");
    }
    

    menuTodos.onclick = function () {
        cambiarEstilo(menuTodos)
        reiniciarEstilo(menuComedia)
        reiniciarEstilo(menuRomance)
        reiniciarEstilo(menuDrama)
        reiniciarEstilo(menuAnime)
    }

    menuComedia.onclick = function () {
        cambiarEstilo(menuComedia)
        reiniciarEstilo(menuTodos)
        reiniciarEstilo(menuRomance)
        reiniciarEstilo(menuDrama)
        reiniciarEstilo(menuAnime)
    }
    menuRomance.onclick = function () {
        cambiarEstilo(menuRomance)
        reiniciarEstilo(menuComedia)
        reiniciarEstilo(menuTodos)
        reiniciarEstilo(menuDrama)
        reiniciarEstilo(menuAnime)
    }
    menuDrama.onclick = function () {
        cambiarEstilo(menuDrama)
        reiniciarEstilo(menuComedia)
        reiniciarEstilo(menuRomance)
        reiniciarEstilo(menuTodos)
        reiniciarEstilo(menuAnime)
    }
    menuAnime.onclick = function () {
        cambiarEstilo(menuAnime)
        reiniciarEstilo(menuComedia)
        reiniciarEstilo(menuRomance)
        reiniciarEstilo(menuDrama)
        reiniciarEstilo(menuTodos)
    }

}