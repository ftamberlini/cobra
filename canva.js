const canvasElemento = document.querySelector("canvas");
const canvasCtx = canvasElemento.getContext("2d");

function setup(){
    canvasElemento.height = canvasCtx.height = window.innerHeight
    canvasElemento.width = canvasCtx.width = window.innerWidth
}
setup();