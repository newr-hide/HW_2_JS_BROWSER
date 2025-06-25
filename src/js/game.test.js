import Game from './game.js';

describe('Constructor Game', () => {
  it('создает игру с полем и правильным количеством клеток', () => {
    const fieldSelector = '.game-field';
    const sellNum = 16;

    // Подготавливаем тестовый DOM
    document.body.innerHTML = `
      <div class="game-field"></div>
    `;

    // Создаем новый экземпляр игры
    const instance = new Game(fieldSelector, sellNum);

    // Проверяем поле
    expect(instance.field).toBeDefined();
    expect(instance.field.classList.contains('game-field')).toBe(true);

    // Проверяем количество клеток
    expect(instance.cells.length).toBe(sellNum);

    // Проверяем, что клетки созданы и имеют нужный класс
    instance.cells.forEach((cell) => {
      expect(cell.classList.contains('cell')).toBe(true);
    });
  });
});