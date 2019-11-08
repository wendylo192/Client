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

    /* HEADER*/

    var img = document.getElementById("mi_imagen");
    var btnImgresar = document.getElementById("ingresar");
    var uno = document.getElementById('botonOn');


    function changeImage() {
        img.src = "img/imagen_share.png"
    }

    btnImgresar.onclick = function () {
        changeImage();
        FbotonOn();
    }


    /* CARRUSEL SALLY */
    function mostrar(valor) {
        if (valor == 1) {
            document.getElementById('todos').style.display = 'block';
            document.getElementById('romance').style.display = 'none';
            document.getElementById('drama').style.display = 'none';
            document.getElementById('comedia').style.display = 'none';
            document.getElementById('anime').style.display = 'none';
        }
        else if (valor == 2) {
            document.getElementById('romance').style.display = 'block';
            document.getElementById('todos').style.display = 'none';
            document.getElementById('drama').style.display = 'none';
            document.getElementById('comedia').style.display = 'none';
            document.getElementById('anime').style.display = 'none';
        }
        else if (valor == 3) {
            document.getElementById('drama').style.display = 'block';
            document.getElementById('todos').style.display = 'none';
            document.getElementById('romance').style.display = 'none';
            document.getElementById('comedia').style.display = 'none';
            document.getElementById('anime').style.display = 'none';
        }
        else if (valor == 4) {
            document.getElementById('comedia').style.display = 'block';
            document.getElementById('todos').style.display = 'none';
            document.getElementById('romance').style.display = 'none';
            document.getElementById('drama').style.display = 'none';
            document.getElementById('anime').style.display = 'none';
        }
        else if (valor == 5) {
            document.getElementById('anime').style.display = 'block';
            document.getElementById('todos').style.display = 'none';
            document.getElementById('romance').style.display = 'none';
            document.getElementById('drama').style.display = 'none';
            document.getElementById('comedia').style.display = 'none';
        }
    }

}