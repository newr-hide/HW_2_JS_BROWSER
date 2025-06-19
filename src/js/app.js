// TODO: write code here
import img from '../images/goblin.png';
const gameField = document.querySelector('.game-field');

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  gameField.appendChild(cell);
}

const character = document.createElement('img');
character.src = img;

function placeCharacter() {
  const cells = document.querySelectorAll('.cell');
  let randomIndex = Math.floor(Math.random() * cells.length);
  const currentIndex = Array.from(cells).indexOf(character.parentNode);
  do {if (randomIndex !== currentIndex) {
    cells[randomIndex].appendChild(character);
    break; 
  }
  randomIndex = Math.floor(Math.random() * cells.length); 
} while (true);
}
setInterval(placeCharacter, 1000);
