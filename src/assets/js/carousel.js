    /* CARRUSEL SALLY */
    $('#carousel').on('slid.bs.carousel', function (e) {
        let elemento = $('#carousel .item.active video').first();
        if (elemento.prop("tagName") == "VIDEO") {
          elemento.get(0).play();
        }
     });
     
     $('#carousel').bind('slide.bs.carousel', function (e) {  
        let elemento = $('#carousel .item.active video').first();
        if (elemento.prop("tagName") == "VIDEO") {
          elemento.get(0).pause();
        }
     });