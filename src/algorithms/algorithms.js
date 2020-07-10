// steps = [
//   [[swaps],[current_data_state]]
// ];

function setup(data) {
  return [data.slice(), [], 0];
}

/**
 * This function implements bubble sort to sort its input data.
 *
 * @param {Array} data - the user's data to be sorted.
 */
exports.bubbleSort = function bubbleSort(data) {
  let [raw, steps, numSwaps] = setup(data);

  for (let i = 0; i < data.length - 1; i++) {
    let swaps = [];
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        swaps.push(
          `Swap index [${j}], ${data[j]}, and index [${j + 1}], ${data[j + 1]}`
        );
        numSwaps++;
        const tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
    const tmpData = data.slice();
    const step = [swaps, tmpData];
    steps.push(step);
  }

  return { data, steps, raw, numSwaps };
};

/**
 * This function implements selection sort to sort its input data.
 *
 * @param {Array} data - The user's data to be sorted.
 */
exports.selectionSort = function selectionSort(data) {
  let [raw, steps, numSwaps] = setup(data);

  // n - 1 sweeps
  for (let i = data.length - 1; i > 0; i--) {
    let swaps = [];

    // index of max element in unsorted portion of the array
    let max = 0;

    // compare if we have a new max
    for (let j = 0; j <= i; j++) {
      if (data[j] > data[max]) {
        max = j;
      }
    }

    // if max is already in position, note that
    if (max === i) {
      swaps.push(
        `The max element, ${data[max]}, at index [${max}], is already in the correct position. No swap necessary.`
      );
    } else {
      swaps.push(
        `Swap index [${max}], ${data[max]}, and index [${i}], ${data[i]}`
      );

      numSwaps++;

      // swap max element to the end of unsorted array
      const tmp = data[i];
      data[i] = data[max];
      data[max] = tmp;
    }

    const tmpData = data.slice();
    const step = [swaps, tmpData];
    steps.push(step);
  }

  return { data, steps, raw, numSwaps };
};

exports.countingSort = function countingSort(data) {
  let [raw, steps, numSwaps] = setup(data);

  let counts = [];

  if (typeof data[0] === 'number') {
    data = countingSortNums(data, counts);
  } else {
    counts.length = 128;

    for (let val of data) {
      if (counts[val.charCodeAt(0)] === undefined)
        counts[val.charCodeAt(0)] = 1;
      else counts[val.charCodeAt(0)]++;
    }

    let result = [];
    let pos = 0;
    for (let i = 0; i < data.length; i++) {
      while (counts[pos] === undefined || counts[pos] === 0) {
        pos++;
      }

      result.push(String.fromCharCode(pos));
      counts[pos]--;
    }

    data = result;
  }

  return data;
};

function countingSortNums(data, counts) {
  let result = [];

  for (let val of data) {
    if (counts[val] === undefined) counts[val] = 1;
    else counts[val]++;
  }

  let pos = 0;
  for (let i = 0; i < data.length; i++) {
    while (counts[pos] === undefined || counts[pos] === 0) {
      pos++;
    }

    result.push(pos);
    counts[pos]--;
  }

  return result;
}
