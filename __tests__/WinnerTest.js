import { Console } from '@woowacourse/mission-utils';
import Car from '../src/Car';
import announceTheWinner from '../src/pick';
import { MESSAGES } from '../src/constants';

const printSpy = jest.spyOn(Console, 'print');

describe('우승자 출력 테스트', () => {
  beforeEach(() => {
    printSpy.mockClear();
  });

  test.each([
    [
      '단독 우승',
      new Map([
        ['pobi', new Car('pobi', '---')],
        ['woni', new Car('woni', '--')],
        ['jun', new Car('jun', '-')],
      ]),
      MESSAGES.WINNER_ANNOUNCEMENT + 'pobi',
    ],
    [
      '공동 우승',
      new Map([
        ['pobi', new Car('pobi', '---')],
        ['woni', new Car('woni', '---')],
        ['jun', new Car('jun', '-')],
      ]),
      MESSAGES.WINNER_ANNOUNCEMENT + 'pobi, woni',
    ],
    [
      '우승자가 없을 때',
      new Map([
        ['pobi', new Car('pobi', '')],
        ['woni', new Car('woni', '')],
        ['jun', new Car('jun', '')],
      ]),
      MESSAGES.WINNER_ANNOUNCEMENT + MESSAGES.NO_WINNER,
    ],
  ])('%s', (_, carEntries, expectedMessage) => {
    announceTheWinner(carEntries);

    expect(printSpy).toHaveBeenCalledWith(expectedMessage);
  });
});
