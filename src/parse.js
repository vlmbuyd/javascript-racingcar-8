/**
 * 문자열을 쉼표를 기준으로 나누어 배열로 반환
 */
const parseIntoArray = (str) => str.split(',').map((el) => el.trim());

/**
 * 입력 받은 자동차 이름 문자열과 시도 횟수를 파싱
 */
const parseInputValues = (cars, attempts) => {
  const carList = parseIntoArray(cars);
  const attemptsCount = Number(attempts);

  return { carList, attemptsCount };
};

export default parseInputValues;
