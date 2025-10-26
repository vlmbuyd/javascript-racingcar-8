import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

const getInputValues = async () => {
  const cars = await Console.readLineAsync(MESSAGES.CARS_NAME_INPUT);
  const attempts = await Console.readLineAsync(MESSAGES.ATTEMPTS_COUNT_INPUT);

  return { cars, attempts };
};

export default getInputValues;
