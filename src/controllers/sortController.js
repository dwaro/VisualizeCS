const algorithms = require('../algorithms/algorithms');

exports.delegate = function delegate(algorithm, data) {
  switch (algorithm) {
    case 'Bubble Sort':
      return algorithms.bubbleSort(data);
    case 'Selection Sort':
      return algorithms.selectionSort(data);
    case 'Counting Sort':
      return algorithms.countingSort(data);
    default:
      return '';
  }
};
