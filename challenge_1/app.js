let start = 1;
let moves = [];
let winner = false;

let piece = function() {
  let piece = 'X';
  if (start % 2 === 0) {
    piece = 'O';
  }
  start += 1;
  return piece;
}

let winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7] ];

  document.addEventListener('click', function() {

    if (event.target.id !== 'reset' && event.target.id) {
      if (!moves.includes(event.target.id)) {
        document.getElementById(event.target.id).innerHTML = piece()
        moves.push(event.target.id);
        checkWinner(Number(event.target.id));
    } else {
      console.log('Illegal Move');
    }
    if (moves.length === 9 && !winner) {
      setTimeout(() => { alert('NOBODY WINS') }, 200)
  }
  }

  else if (event.target.id === 'reset') {
    start = 1;
    moves = [];
    let winner = false;
    winConditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7] ];
    let obj = document.getElementsByClassName('square');
    for (var i = 0; i < obj.length; i++) {
      if (obj.item(i)) {
        obj.item(i).innerHTML = '';
      }
    }
  }
});

let checkWinner = function(id) {

  let player;

  if (start % 2 === 0) {
    player = 'X'
  } else {
    player = 'O'
  }

  winConditions.forEach((arr) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === id) {
        arr.splice(i, 1, player)
      }
    }
    let winning = (typeof arr[0] !== 'number') && (arr[0] === arr[1]) && (arr[1] === arr[2]);

    if (winning) {
      winner = true;
      setTimeout(() => {
        alert(`${player} wins`)}, 200)
    }
  })
};
