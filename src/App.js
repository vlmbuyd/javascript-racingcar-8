import { Console } from '@woowacourse/mission-utils';
import getInputValues from './view/inputReader.js';
import { MESSAGES } from './utils/constants.js';
import Game from './model/Game.js';
import announceTheWinner from './view/outputView.js';

class App {
  async run() {
    const { carList, attemptsCount } = await getInputValues();
    const carEntries = new Map(); // 자동차 이름과 Car 클래스 객체를 쌍으로 저장하는 Map

    const game = new Game(carList, attemptsCount, carEntries);
    const results = game.playAllRound();

    Console.print(MESSAGES.GAME_RESULT);
    Console.print(results.join('\n'));

    announceTheWinner(carEntries);
  }
}

export default App;
