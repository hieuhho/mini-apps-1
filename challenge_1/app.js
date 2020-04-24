console.log('hello world')

let start = 1;
let boardPiece = function() {
  let piece = 'X';
  if (start % 2 === 0) {
    piece = 'O';
  }
  start++;
  return piece;
}

let canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 300;
context.lineWidth = 3;

context.beginPath()
context.moveTo(100, 0);
context.lineTo(100, 300);
context.stroke();

context.beginPath()
context.moveTo(200, 0);
context.lineTo(200, 300);
context.stroke();

context.beginPath()
context.moveTo(0, 100);
context.lineTo(300, 100);
context.stroke();

context.beginPath()
context.moveTo(0, 200);
context.lineTo(300, 200);
context.stroke();


window.onclick = function(e) {
  if (e.pageX < 300 && e.pageY < 300) {
    let clickX = Math.floor(e.pageX / (300/3));
    let clickY = Math.floor(e.pageY / (300/3));
    console.log(clickX, clickY)
  }
}


document.getElementsByClassName('boardpiece')[0].addEventListener('click', function() {
  document.getElementsByClassName('boardpiece')[0].innerHTML = boardPiece();
})