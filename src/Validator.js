import { GAME_RULES, MESSAGES, SEPERATOR } from './constants.js';

/**
 * 입력값 검증
 */
export default class InputValidator {
  /**
   * @param {string} cars - 입력받은 자동차 이름 문자열
   * @param {string} attempts - 입력받은 시도 횟수 문자열
   */
  constructor(cars, attempts) {
    this.cars = cars;
    this.attempts = attempts;
    this.validators = [
      () => this.validateSeparator(),
      () => this.validateCharLimit(),
      () => this.validateAttempts(),
    ];
  }

  // 쉼표 외 특수 문자
  validateSeparator() {
    const regex = GAME_RULES.ALLOWED_CHAR_REGEX;

    if (regex.test(this.cars)) {
      throw new Error(MESSAGES.INVALID_SEPERATOR);
    }
  }

  // 글자 수 제한
  validateCharLimit() {
    const input = this.cars.split(SEPERATOR.COMMA).map((el) => el.trim());

    if (
      !input.every(
        (el) =>
          el.length >= GAME_RULES.MIN_NAME_LENGTH &&
          el.length <= GAME_RULES.MAX_NAME_LENGTH
      )
    ) {
      throw new Error(MESSAGES.INVALID_CHAR_LIMIT);
    }
  }

  // 시도 횟수
  validateAttempts() {
    if (Number.isNaN(Number(this.attempts))) {
      throw new Error(MESSAGES.INVALID_ATTEMPTS_TYPE);
    }

    if (!Number.isInteger(Number(this.attempts))) {
      throw new Error(MESSAGES.INVALID_ATTEMPTS_INTEGER);
    }

    if (Number(this.attempts < GAME_RULES.MIN_ATTEMPTS_COUNT)) {
      throw new Error(MESSAGES.INVALID_ATTEMPTS_LIMIT);
    }
  }

  run() {
    this.validators.forEach((validator) => validator());
  }
}
