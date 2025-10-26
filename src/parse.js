/**
 * 입력 받은 문자열을 쉼표를 기준으로 나누어 배열로 반환
 */
const parseIntoArray = (str) => str.split(',').map((el) => el.trim());

export default parseIntoArray;
