import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

/**
 * 우승자를 선정
 */
const pickTheWinner = (carEntries) => {
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

/**
 * 선정된 우승자를 발표
 * @param {Map<string, Car>} carEntries - 경기 종료 후 자동차 목록
 */
const announceTheWinner = (carEntries) => {
  const winners = pickTheWinner(carEntries);

  if (winners.length === 0)
    Console.print(MESSAGES.WINNER_ANNOUNCEMENT + MESSAGES.NO_WINNER);

  if (winners.length > 0)
    Console.print(MESSAGES.WINNER_ANNOUNCEMENT + winners.join(', '));
};

export default announceTheWinner;
