import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants.js';
import InputValidator from '../utils/InputValidator.js';
import parseInputValues from '../utils/inputParser.js';

const getInputValues = async () => {
  const cars = await Console.readLineAsync(MESSAGES.CARS_NAME_INPUT);
  const attempts = await Console.readLineAsync(MESSAGES.ATTEMPTS_COUNT_INPUT);

  const validator = new InputValidator(cars, attempts);
  validator.run();

  // 입력값 파싱
  const { carList, attemptsCount } = parseInputValues(cars, attempts);

  return { carList, attemptsCount };
};

export default getInputValues;
