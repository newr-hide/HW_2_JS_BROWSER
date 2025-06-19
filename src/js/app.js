// TODO: write code here
const gameField = document.querySelector('.game-field');

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  gameField.appendChild(cell);
}

const character = document.createElement('img');
character.src = '../src/images/goblin.png';

function placeCharacter() {
  const cells = document.querySelectorAll('.cell');
  const randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].appendChild(character);
}
setInterval(placeCharacter, 1000);
