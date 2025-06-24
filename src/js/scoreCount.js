
export default class Scoreboard {
    constructor() {
      this.score = 0;
      this.misses = 0;
      this.maxMissesAllowed = 5;
      this.maxHitAllowed = 5;
    }
  
    hit() {
      this.score++;
      if(this.score >= this.maxHitAllowed)
      {
        throw new Error("Вы победили!");
      }
    }
  
    miss() {
      this.misses++;
      if (this.misses >= this.maxMissesAllowed) {
        throw new Error("Проиграл...");
      }
    }
  
    getScore() {
    return this.score;
    }

    getMiss() {
        return this.misses;
    }

    resetCounters() {
        this.score = 0;
        this.misses = 0;
    }
  }