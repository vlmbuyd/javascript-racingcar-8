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
    const carEntries = new Map();

    parsedCars.forEach((car) => carEntries.set(car, new Car(car, '')));

    Array.from({ length: attemptsCount }).forEach(() => {
      play(carEntries, results);
    });

    Console.print(MESSAGES.GAME_RESULT);
    Console.print(results.join('\n'));

    announceTheWinner(carEntries);
  }
}

export default App;
