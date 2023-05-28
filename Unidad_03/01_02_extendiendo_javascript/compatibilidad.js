console.log(navigator.userAgent);

//https://github.com/bestiejs/platform.js

console.log(platform.name);
console.log(platform.version);
console.log(platform.layout);
console.log(platform.os);
console.log(platform.description);

//https://caniuse.com/

if(navigator && navigator.geolocation){
    //detectar la posición del usuario
}else{
    //hacer alguna otra cosa 
}

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

if(navigator.getUserMedia){
    //solicitar la cámara
}



