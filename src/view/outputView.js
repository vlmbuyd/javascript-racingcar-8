import { Console } from '@woowacourse/mission-utils';
import pickWinner from '../utils/pickWinner.js';
import { MESSAGES } from '../constants.js';

/**
 * 선정된 우승자를 발표
 * @param {Map<string, Car>} carEntries - 경기 종료 후 자동차 목록
 */
const announceTheWinner = (carEntries) => {
  const winners = pickWinner(carEntries);

  if (winners.length === 0)
    Console.print(MESSAGES.WINNER_ANNOUNCEMENT + MESSAGES.NO_WINNER);

  if (winners.length > 0)
    Console.print(MESSAGES.WINNER_ANNOUNCEMENT + winners.join(', '));
};

export default announceTheWinner;
