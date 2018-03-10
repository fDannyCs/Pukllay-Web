var barraNavPukllay = document.getElementById("barraNavPukllay");

window.addEventListener("scroll", function(){
	if(window.scrollY > 0){
		barraNavPukllay.style.backgroundColor = "rgba(255, 255, 255, "+(0.5+0.005*window.scrollY)+")";
	}
}, false);
