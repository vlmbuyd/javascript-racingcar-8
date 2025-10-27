import { Console } from '@woowacourse/mission-utils';
import pickWinner from '../model/pickWinner.js';
import { MESSAGES } from '../utils/constants.js';

/**
 * 라운드별 실행 결과 출력
 */
const printGameResult = (results) => {
  Console.print(MESSAGES.GAME_RESULT);
  Console.print(results.join('\n'));
};

/**
 * 선정된 우승자를 출력
 * @param {Map<string, Car>} carEntries - 경기 종료 후 자동차 목록
 */
export const printWinner = (carEntries) => {
  const winners = pickWinner(carEntries);

  if (winners.length === 0)
    Console.print(MESSAGES.WINNER_ANNOUNCEMENT + MESSAGES.NO_WINNER);

  if (winners.length > 0)
    Console.print(MESSAGES.WINNER_ANNOUNCEMENT + winners.join(', '));
};

/**
 * 게임의 모든 결과를 출력
 * @param {string[]} results - 라운드별 실행 결과 배열
 * @param {Map<string, Car>} carEntries - 경기 종료 후 자동차 목록
 */
export const output = (results, carEntries) => {
  printGameResult(results);
  printWinner(carEntries);
};
