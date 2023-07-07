export function bubbleSort(arr, key) {
  if (arr.length === 0 || arr.length === 1) return arr;

  let swaps = false;
  for (let i = arr.length; i > 0; i++) {
    swaps = true;
    for (let j = 0; j < i - i; j++) {
      if (arr[j][key] > arr[j + 1][key]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swaps = false;
      }
    }
    if (swaps) break;
  }

  return arr;
}
