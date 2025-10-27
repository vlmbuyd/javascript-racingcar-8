import Car from './Car.js';

export default class Game {
  /**
   *
   * @param {string[]} carList - 자동차 이름 배열
   * @param {number} attempts - 시도 횟수
   * @param {Map<string, new Car>} carEntries - 자동차 객체 맵
   */
  constructor(carList, attempts, carEntries) {
    this.carList = carList;
    this.attempts = attempts;
    this.carEntries = carEntries;
  }

  // 자동차 객체 맵 생성
  setCarEntiries() {
    this.carList.forEach((car) => this.carEntries.set(car, new Car(car, '')));
  }

  // 저장된 게임 결과 문자열 반환
  static savedGameResults(car) {
    return `${car.name} : ${car.position}\n`;
  }

  // 한 라운드 실행
  playRound(results) {
    let playResults = '\n';

    this.carEntries.forEach((car, carName) => {
      const movedCar = car.move();

      // 반환된 객체가 원본과 다를 때 == 전진했을 때
      if (car !== movedCar) {
        this.carEntries.set(carName, movedCar);
        playResults += Game.savedGameResults(movedCar);
      } else {
        playResults += Game.savedGameResults(car);
      }
    });

    results.push(playResults);
  }

  // 전체 라운드 실행
  playAllRound() {
    const results = []; // 전체 라운드 결과 저장

    this.setCarEntiries();

    Array.from({ length: this.attempts }).forEach(() => {
      this.playRound(results);
    });

    return results;
  }
}
