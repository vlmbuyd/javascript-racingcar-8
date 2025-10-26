import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import InputValidator from './Validator.js';

const getInputValues = async () => {
  const cars = await Console.readLineAsync(MESSAGES.CARS_NAME_INPUT);
  const attempts = await Console.readLineAsync(MESSAGES.ATTEMPTS_COUNT_INPUT);

  const validator = new InputValidator(cars, attempts);
  validator.run();

  return { cars, attempts };
};

export default getInputValues;
