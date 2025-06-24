import imgGoblin from "../images/goblin.png";
export default class Goblin {
    constructor(cells) {
        this.cells = cells;
        this.imgSrc = imgGoblin;
        this.timeoutId = null;
        this.cellIndex = null;
    }

    spawn() {
        const randomIndex = Math.floor(Math.random() * this.cells.length);
        this.cellIndex = randomIndex;
        const gImg = document.createElement("img");
        gImg.src = this.imgSrc;
        gImg.alt = "Goblin";
        this.cells[this.cellIndex].innerHTML = "";
        this.cells[this.cellIndex].appendChild(gImg); 
        this.timeoutId = setTimeout(() => {
          this.cells[this.cellIndex].innerHTML = "";
        }, 1000);
      }

    getCellIndex() {
    return this.cellIndex;
    }

}