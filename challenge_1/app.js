console.log('hello world')

let start = 1;
let moves = [0];

let boardPiece = function() {
  let piece = 'X';
  if (start % 2 === 0) {
    piece = 'O';
  }
  start += 1;
  return piece;
}


let board = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
]

document.addEventListener('click', function() {
  if (!moves.includes(event.target.id)) {
    document.getElementById(event.target.id).innerHTML = boardPiece();
    moves.push(event.target.id);
    gameMaster(board, event.target.id);
  } else {
    console.log('Illegal Move');
  }
})


let gameMaster = function(board, id) {

}