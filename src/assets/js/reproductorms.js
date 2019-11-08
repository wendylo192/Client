
//PRIMER REPRODUCTOR//

function cambiarTrack(track) {
    var path =  track.getAttribute("path");
    viejo_audio = document.getElementById("reproductor");
    audio_padre = viejo_audio.parentNode
    audio_padre.removeChild(viejo_audio);
    nuevo_audio = document.createElement("audio");
    nuevo_audio.setAttribute("id","reproductor");
    nuevo_audio.setAttribute("controls", "controls");

   // nuevo_audio.setAttribute("autoplay", "autoplay")

    source = document.createElement("source");
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/mpeg")
    source.setAttribute("id", "reproductorSource")
    nuevo_audio.appendChild(source)
    audio_padre.appendChild(nuevo_audio)
   }

 function cargarReproductor() {
          var select = document.getElementById("selectTrack")
          var path = select.options[0].getAttribute("path")
    nuevo_audio = document.createElement("audio")
    nuevo_audio.setAttribute("id","reproductor")
    nuevo_audio.setAttribute("controls", "controls")       
    source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/mpeg")
    source.setAttribute("id", "reproductorSource")
    nuevo_audio.appendChild(source)
    padre = document.getElementById("reproductorBox")
    padre.appendChild(nuevo_audio)
 }


 //SEGUNDO REPRODUCTOR//

 function cambiarTrack2(track2) {
   var path2 =  track2.getAttribute("path2");
   viejo_audio2 = document.getElementById("reproductor2");
   audio_padre2 = viejo_audio2.parentNode
   audio_padre2.removeChild(viejo_audio2);
   nuevo_audio2 = document.createElement("audio2");
   nuevo_audio2.setAttribute("id","reproductor2");
   nuevo_audio2.setAttribute("controls", "controls");

  // nuevo_audio.setAttribute("autoplay", "autoplay")

   source2 = document.createElement("source");
   source2.setAttribute("src", path2)
   source2.setAttribute("type", "audio/mpeg")
   source2.setAttribute("id", "reproductorSource2")
   nuevo_audio2.appendChild(source2)
   audio_padre2.appendChild(nuevo_audio2)
  }


function cargarReproductor2() {
         var select2 = document.getElementById("selectTrack2")
         var path2 = select2.options[0].getAttribute("path2")
   nuevo_audio2 = document.createElement("audio")
   nuevo_audio2.setAttribute("id","reproductor2")
   nuevo_audio2.setAttribute("controls", "controls")       
   source2 = document.createElement("source")
   source2.setAttribute("src", path2)
   source2.setAttribute("type", "audio/mpeg")
   source2.setAttribute("id", "reproductorSource2")
   nuevo_audio2.appendChild(source2)
   padre2 = document.getElementById("reproductorBox2")
   padre2.appendChild(nuevo_audio2)
}

 cargarReproductor();
 cargarReproductor2();