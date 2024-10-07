//Verify whether every element in an array is also present in a set


export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
