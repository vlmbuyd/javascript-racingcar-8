import { Random } from '@woowacourse/mission-utils';

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
    const randNum = Random.pickNumberInRange(0, 9);
    return randNum >= 4;
  }

  move() {
    if (Car.shouldMove()) {
      return new Car(this.name, this.position + '-');
    }

    return this;
  }
}
