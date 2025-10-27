import { Console } from '@woowacourse/mission-utils';
import getInputValues from './input.js';
import parseIntoArray from './parse.js';
import play from './play.js';
import Car from './Car.js';
import announceTheWinner from './pick.js';
import { MESSAGES } from './constants.js';

class App {
  async run() {
    const { cars, attempts } = await getInputValues();
    const parsedCars = parseIntoArray(cars);
    const attemptsCount = Number(attempts);

    const results = [];
    const carList = new Map();

    parsedCars.forEach((car) => carList.set(car, new Car(car, '')));

    Array.from({ length: attemptsCount }).forEach(() => {
      play(carList, results);
    });

    Console.print(MESSAGES.GAME_RESULT);
    Console.print(results.join('\n'));

    announceTheWinner(carList);
  }
}

export default App;
