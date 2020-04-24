let start = 1;
let moves = [];

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
  if (event.target.id !== 'reset') {
    if (start === 9) {
      setTimeout(() => { alert('NOBODY WINS') }, 300)
    }
    if (!moves.includes(event.target.id)) {
      document.getElementById(event.target.id).innerHTML = piece()
      moves.push(event.target.id);
      checkWinner(Number(event.target.id));
    } else {
      console.log('Illegal Move');
    }
  }
  if (event.target.id === 'reset') {
    start = 1;
    moves = [];
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
    for (var i = 0; obj.length; i++) {
      obj[i].innerHTML = ''
    }
  }

});

let checkWinner = function(id) {

  let player;
  let isWinner = false;

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
      setTimeout(() => {
        alert(`${player} wins`)}, 200)
    }
  })
};
