// steps = [
//   [[swaps],[current_data_state]]
// ];

exports.bubbleSort = function bubbleSort(data) {
  let steps = [];

  for (let i = 0; i < data.length - 1; i++) {
    let swaps = [];
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        swaps.push(
          `Swap index [${j}], ${data[j]}, and index [${j + 1}], ${data[j + 1]}.`
        );
        const tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
    const tmpData = data.slice();
    const step = [swaps, tmpData];
    steps.push(step);
  }

  return { data, steps };
};
