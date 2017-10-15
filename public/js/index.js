'use strict';

const app = require('express')(),
  format = require('./src/config/format.json'),
  server = require('http').createServer(app),
  io = require('socket.io')(server);

io.on('connection', function(){ 
  console.log('somebody comming');
});

server.listen(3000);

console.log(format);

let toastContent = $('<span>Nomre de réservation envoyées: </span>');

$('#start').on('click', function(){
  let nbOfReservation = 0;
  setInterval(function(){
    let rand = getRandom(10,42);
    for (var i = rand; i > 0; i--) {
      nbOfReservation++;
      io.emit('reservation', format);
      // Materialize.toast('Réservation envoyée !', 500, 'rounded');
    }
    let currToast = toastContent.add($('<span id="nbOfReservation" class="btn-flat toast-action">'+ nbOfReservation +' !</span>'))
    Materialize.toast(currToast, 2000);
  },3000)
});


// Return a random int number between min-max
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}