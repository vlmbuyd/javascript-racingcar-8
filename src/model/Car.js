import { Random } from '@woowacourse/mission-utils';
import { GAME_RULES } from '../utils/constants.js';

export default class Car {
  /**
   *
   * @param {string} name - 자동차 이름
   * @param {string} position - 자동차 위치
   */
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  static shouldMove() {
    const randNum = Random.pickNumberInRange(
      GAME_RULES.RANDOM_NUMBER_MIN,
      GAME_RULES.RANDOM_NUMBER_MAX
    );
    return randNum >= GAME_RULES.MOVE_CRITERIA;
  }

  move() {
    if (Car.shouldMove()) {
      return new Car(this.name, this.position + '-');
    }

    return this;
  }
}
