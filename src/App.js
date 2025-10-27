import getInputValues from './view/inputReader.js';
import Game from './model/Game.js';
import { output } from './view/outputView.js';

class App {
  async run() {
    const { carList, attemptsCount } = await getInputValues();
    const carEntries = new Map(); // 자동차 이름과 Car 클래스 객체를 쌍으로 저장하는 Map

    const game = new Game(carList, attemptsCount, carEntries);
    const results = game.playAllRound();

    output(results, carEntries);
  }
}

export default App;
