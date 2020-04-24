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

document.getElementsByClassName('boardpiece')[0].addEventListener('click', function() {
  document.getElementsByClassName('boardpiece')[0].innerHTML = boardPiece();
})