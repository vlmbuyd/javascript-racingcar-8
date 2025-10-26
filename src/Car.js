import { Random } from '@woowacourse/mission-utils';

export default class Car {
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
