var volGeneral = .01

var audioplayer = document.getElementById('audio-player')
$(document).ready(function () {
  // setTimeout(() => {
    audioplayer.volume = volGeneral /3
  // }, 300)
  // setTimeout(() => {
  //   audioplayer.volume = .02
  // }, 500)
  // setTimeout(() => {
  //   audioplayer.volume = .03
  // }, 1000)
  // audioplayer.muted = true
})

var playBtn = false
var music = getCookie('music')
if (music === 'true') {
  playBtn = true
  $('#audio-player').trigger('play')
  $('#audioIconOn').css('z-index', '5')
}

$('#mutedAudio').click(function () {
  // audioplayer.play = !audioplayer.play
  if (!playBtn) {
    $('#audio-player').trigger('play')
    $('#audioIconOn').css('z-index', '5')
    playBtn = true
    document.cookie = 'music=true;'
  } else {
    $('#audio-player').trigger('pause')
    $('#audioIconOn').css('z-index', '0')
    playBtn = false
    document.cookie = 'music=false;'
  }
})

var textActivate = false

//contiene la vibración por segundo de la nota
//posición en el arreglo: do=0,do#=1,re=2........
var Sonidos= [261,277,293,311,329,349,369,392,415,440,466,493];

//creamos contexto
var context = new (window.AudioContext || window.webkitAudioContext)();

$("#vol").change(function(e){
  volGeneral = e.target.value * .001
  console.log(volGeneral)
  audioplayer.volume = volGeneral /3
})

function Sonido(nota){
     //creamos oscilador
    var osc = context.createOscillator();
    // var gainNode = context.createGain();

    var gainNode = new GainNode(context);

    osc.type = 'triangle';
    osc.frequency.value = Sonidos[nota];

    gainNode.gain.value = volGeneral * 2
    //asignamos el destino para el sonido
    osc.connect(gainNode).connect(context.destination);
    //iniciamos la nota
    osc.start();
    //detenemos la nota medio segundo despues
    osc.stop(context.currentTime + .1);

}

setInterval(() => {
  if(textActivate){
    var ran =  parseInt(Math.random() * (12 - 6) + 0)
    Sonido(ran)
  }
}, 100);