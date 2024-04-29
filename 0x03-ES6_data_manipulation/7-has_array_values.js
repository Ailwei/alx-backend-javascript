/* eslint-disable array-callback-return */
export default function hasValuesFromArray(givenSet, array) {
  let verdict = true;
  array.map((element) => {
    if (!givenSet.has(element)) {
      verdict = false;
    }
  });

  return verdict;
}
