/* eslint-disable array-callback-return */
export default function cleanSet(givenSet, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...givenSet]
    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
}
