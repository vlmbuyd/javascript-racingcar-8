export const MESSAGES = Object.freeze({
  CARS_NAME_INPUT:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ATTEMPTS_COUNT_INPUT: '시도할 횟수는 몇 회인가요?\n',

  INVALID_CHAR_LIMIT: '[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.',
  INVALID_SEPERATOR:
    '[ERROR] 자동차 이름에는 쉼표(,) 외의 특수문자를 사용할 수 없습니다.',
  INVALID_ATTEMPTS_TYPE: '[ERROR] 시도 횟수는 숫자여야 합니다.',
  INVALID_ATTEMPTS_INTEGER: '[ERROR] 시도 횟수는 정수여야 합니다.',
  INVALID_ATTEMPTS_LIMIT: '[ERROR] 시도 횟수는 1 이상이어야 합니다.',

  GAME_RESULT: '실행 결과',
  WINNER_ANNOUNCEMENT: '최종 우승자 : ',
  NO_WINNER: '없음',
});

export const GAME_RULES = Object.freeze({
  MIN_NAME_LENGTH: 1,
  MAX_NAME_LENGTH: 5,
  MIN_ATTEMPTS_COUNT: 1,
  ALLOWED_CHAR_REGEX: /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣, ]/,
});

export const SEPERATOR = Object.freeze({
  COMMA: ',',
});
