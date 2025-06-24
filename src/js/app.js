 // TODO: write code here
import Game from './game.js'

document.addEventListener('DOMContentLoaded', () => {
  try {
    const playGame = new Game();
  }catch(error) {
    alert(error.message);
  }
  })




// import img from '../images/goblin.png';

// const gameField = document.querySelector('.game-field');

// for (let i = 0; i < 16; i++) {
//   const cell = document.createElement('div');
//   cell.classList.add('cell');
//   gameField.appendChild(cell);
// }

// const character = document.createElement('img');
// character.src = img;

// function placeCharacter() {
//   const cells = document.querySelectorAll('.cell');
//   let randomIndex = Math.floor(Math.random() * cells.length);
//   const currentIndex = Array.from(cells).indexOf(character.parentNode);``
//   do {if (randomIndex !== currentIndex) {
//     cells[randomIndex].appendChild(character);
//     break; 
//   }
//   randomIndex = Math.floor(Math.random() * cells.length); 
// } while (true);
// }
// setInterval(placeCharacter, 1000);


// document.addEventListener('DOMContentLoaded', () => {
  
//   gameField.addEventListener('mouseenter', () => {
//     document.body.style.cursor = 'url("../src/images/hammer.svg"), auto';
//     console.log('Mouse enter');
//   });
//   gameField.addEventListener('click', () => {
//     document.body.style.cursor = 'url("../src/images/explosion.svg"), auto';
//     console.log('click mouse')
//     setTimeout(() => {
//       document.body.style.cursor = 'url("../src/images/hammer.svg"), auto';
//     }, 300);
//   })
// });