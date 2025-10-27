/**
 * 우승자를 선정
 * @param {Map<string, new Car>} carEntries - 자동차 객체 맵
 */
const pickWinner = (carEntries) => {
  let maxPos = -1;
  let winners = [];

  carEntries.forEach((car, carName) => {
    const pos = car.position.length;

    if (pos > maxPos) {
      maxPos = pos;
      winners = [carName];
    } else if (pos === maxPos) {
      winners.push(carName);
    }
  });
  // 우승자가 없을 때
  if (maxPos <= 0) return [];

  return winners;
};

export default pickWinner;
