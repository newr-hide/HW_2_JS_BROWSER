import Goblin from "./gonlin.js";
import Scoreboard from "./scoreCount.js";

export default class Game{
    constructor(fieldSelector='.game-field', sellNum=16) {
      this.field = document.querySelector(fieldSelector);
      this.cells = [];
      for (let i = 0; i < sellNum; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.field.appendChild(cell);
        this.cells.push(cell);
      }
      const countHit = document.createElement('div');
      countHit.classList.add('count-hit');
      this.field.parentNode.insertBefore(countHit, this.field.nextSibling);
      countHit.textContent = `Гоблинов убито: 0`;
      const countMiss = document.createElement('div');
      countMiss.classList.add('count-miss');
      this.field.parentNode.insertBefore(countMiss, this.field.nextSibling);
      countMiss.textContent = `Промахов: 0`
    this.currentGoblin = null;
    this.scoreboard = new Scoreboard();

    //Для молотка
    this.field.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'url("../src/images/hammer.svg"), auto';
            console.log('Mouse enter');
          });

    //Регистрация кликов
    this.field.addEventListener("click", event => {
        document.body.style.cursor = 'url("../src/images/explosion.svg"), auto';
        setTimeout(() => {
            document.body.style.cursor = 'url("../src/images/hammer.svg"), auto';
        }, 300);
        const target = event.target;
        const cell = target.closest(".cell"); 
  
        if (cell) {
          const index = this.cells.indexOf(cell); 
          this.onCellClick(index); 
        }
      });
    
    //запускаем гоблина
    this.startGoblinCycle();
  }

  startGoblinCycle() {
    this.goblinInterval = setInterval(() => {
      const goblin = new Goblin(this.cells);
      goblin.spawn();
      goblin.getCellIndex()
      this.currentGoblin = goblin;
    }, 1000);
    
  }

  onCellClick(index) {
    if (this.cells[index].querySelector("img")) {
        try {
            this.scoreboard.hit(); 
            this.updateCountHit();
            clearInterval(this.goblinInterval); 
            this.startGoblinCycle(); 
        }catch (error) {
                this.endGame(error.message);
        }
      
    } else {
        try {
            this.scoreboard.miss();
            this.updateCountMiss();
          } catch (error) {
            this.endGame(error.message);
          }
    }
    }

  updateCountHit() {
    const countHitDiv = document.querySelector('.count-hit');
    countHitDiv.textContent = `Убито гоблинов: ${this.scoreboard.getScore()}`;
  }

  updateCountMiss() {
    const countMissDiv = document.querySelector('.count-miss');
    countMissDiv.textContent = `Промахов: ${this.scoreboard.getMiss()}`;
  }

  endGame(message) {
        alert(message); 
        clearInterval(this.goblinInterval); 
        this.scoreboard.resetCounters(); 
        this.updateCountHit();
        this.updateCountMiss();
        this.startGoblinCycle();
      }
  }
