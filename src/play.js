const play = (carList, results) => {
  let playResults = '\n';

  carList.forEach((car, carName) => {
    const movedCar = car.move();

    // 반환된 원본과 객체가 다를 때 == 전진했을 때
    if (car !== movedCar) {
      carList.set(carName, movedCar);
      playResults += `${carName} : ${movedCar.position}\n`;
    } else {
      playResults += `${carName} : ${car.position}\n`;
    }
  });

  results.push(playResults);
};

export default play;
