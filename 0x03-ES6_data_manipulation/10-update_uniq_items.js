/* eslint-disable no-param-reassign */
export default function updateUniqueItems(givenMap) {
  if (givenMap instanceof Map) {
    for (const [key, value] of givenMap) {
      if (value === 1) {
        givenMap.set(key, 100);
      }
    }

    return givenMap;
  }

  throw new Error('Cannot process');
}
