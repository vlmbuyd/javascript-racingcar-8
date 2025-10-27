const play = (carEntries, results) => {
  let playResults = '\n';

  carEntries.forEach((car, carName) => {
    const movedCar = car.move();

    // 반환된 객체가 원본과 다를 때 == 전진했을 때
    if (car !== movedCar) {
      carEntries.set(carName, movedCar);
      // TODO: 출력 함수로 분리하기
      playResults += `${carName} : ${movedCar.position}\n`;
    } else {
      playResults += `${carName} : ${car.position}\n`;
    }
  });

  results.push(playResults);
};

export default play;
