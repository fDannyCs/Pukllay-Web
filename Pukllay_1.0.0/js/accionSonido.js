var audioEntrada = document.getElementById("audioEntrada");

var checaSonido = document.getElementById("soundButton");
var indicaSonido = document.getElementById("indicaSonido");

window.addEventListener("load", function(){
	audioEntrada.volume = 0.4;
	audioEntrada.play();
	audioEntrada.loop = true;
}, false);

checaSonido.addEventListener("click", function(){
	if(!checaSonido.checked){
		audioEntrada.muted = true;
		indicaSonido.classList.add("icon-sound-mute");
		indicaSonido.classList.remove("icon-sound");

	} else{
		audioEntrada.muted = false;
		indicaSonido.classList.add("icon-sound");
		indicaSonido.classList.remove("icon-sound-mute");
	}
}, false);