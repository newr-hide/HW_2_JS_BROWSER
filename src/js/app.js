 // TODO: write code here
import Game from './game.js'

document.addEventListener('DOMContentLoaded', () => {
  try {
    const playGame = new Game();
  }catch(error) {
    alert(error.message);
  }
  })
