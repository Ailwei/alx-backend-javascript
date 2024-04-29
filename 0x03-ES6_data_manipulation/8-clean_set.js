/* eslint-disable array-callback-return */
export default function hasValuesFromArray(givenSet, array) {
  let result = true;
  array.map((element) => {
    if (!givenSet.has(element)) {
      result = false;
    }
  });

  return result;
}
