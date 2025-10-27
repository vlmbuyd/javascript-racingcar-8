import { MESSAGES } from '../src/constants';
import InputValidator from '../src/utils/InputValidator';

describe('입력값 검증 테스트: (에러 케이스)', () => {
  test.each([
    ['특수 문자(;)', 'pobi;woni', '3', MESSAGES.INVALID_SEPERATOR],
    ['공백 이름', '', '3', MESSAGES.INVALID_CHAR_LIMIT],
    ['쉼표로 끝남', 'pobi,', '3', MESSAGES.INVALID_CHAR_LIMIT],
    ['쉼표 연속 2개 이상', 'pobi,,woni,,,', '3', MESSAGES.INVALID_CHAR_LIMIT],
    ['6자 이상', 'pobi,javaji', '3', MESSAGES.INVALID_CHAR_LIMIT],
    ['시도 횟수(문자)', 'pobi,woni', 'abc', MESSAGES.INVALID_ATTEMPTS_TYPE],
    [
      '시도 횟수(정수 아닌 실수)',
      'pobi,woni',
      '1.2',
      MESSAGES.INVALID_ATTEMPTS_INTEGER,
    ],
    ['시도 횟수(0, 음수)', 'pobi,woni', '-1', MESSAGES.INVALID_ATTEMPTS_LIMIT],
  ])('입력값 검증 테스트: %s', (_, cars, attempts, expectedError) => {
    const validator = new InputValidator(cars, attempts);
    expect(() => validator.run()).toThrow(expectedError);
  });
});

describe('입력값 검증 테스트: (성공 케이스)', () => {
  test.each([
    ['정상적인 입력', 'pobi,woni,jun', '5'],
    ['쉼표 사이 공백', 'pobi, woni,  jun', '3'],
  ])('입력값 검증 테스트: %s', (_, cars, attempts) => {
    const validator = new InputValidator(cars, attempts);
    expect(() => validator.run()).not.toThrow();
  });
});
