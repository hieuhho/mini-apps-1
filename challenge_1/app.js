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

// let canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');

// canvas.width = 300;
// canvas.height = 300;
// context.lineWidth = 3;

// context.beginPath()
// context.moveTo(100, 0);
// context.lineTo(100, 300);
// context.stroke();

// context.beginPath()
// context.moveTo(200, 0);
// context.lineTo(200, 300);
// context.stroke();

// context.beginPath()
// context.moveTo(0, 100);
// context.lineTo(300, 100);
// context.stroke();

// context.beginPath()
// context.moveTo(0, 200);
// context.lineTo(300, 200);
// context.stroke();


// window.onclick = function(e) {
//   if (e.pageX < 300 && e.pageY < 300) {
//     let clickX = Math.floor(e.pageX / (300/3));
//     let clickY = Math.floor(e.pageY / (300/3));
//     console.log(clickX, clickY)
//     context.font = '30px Arial'
//     context.fillText('boardPiece()', e.pageX, e.pageY)
//   }
// }


document.getElementsByClassName('A1')[0].addEventListener('click', function() {
  document.getElementsByClassName('A1')[0].innerHTML = boardPiece();
})
document.getElementsByClassName('A2')[0].addEventListener('click', function() {
  document.getElementsByClassName('A2')[0].innerHTML = boardPiece();
})
document.getElementsByClassName('A3')[0].addEventListener('click', function() {
  document.getElementsByClassName('A3')[0].innerHTML = boardPiece();
})
document.getElementsByClassName('B1')[0].addEventListener('click', function() {
  document.getElementsByClassName('B1')[0].innerHTML = boardPiece();
})
document.getElementsByClassName('B2')[0].addEventListener('click', function() {
  document.getElementsByClassName('B2')[0].innerHTML = boardPiece();
})
document.getElementsByClassName('B3')[0].addEventListener('click', function() {
  document.getElementsByClassName('B3')[0].innerHTML = boardPiece();
})
document.getElementsByClassName('C1')[0].addEventListener('click', function() {
  document.getElementsByClassName('C1')[0].innerHTML = boardPiece();
})
document.getElementsByClassName('C2')[0].addEventListener('click', function() {
  document.getElementsByClassName('C2')[0].innerHTML = boardPiece();
})
document.getElementsByClassName('C3')[0].addEventListener('click', function() {
  document.getElementsByClassName('C3')[0].innerHTML = boardPiece();
})
