const algorithms = require('../algorithms/algorithms');

exports.delegate = function delegate(algorithm, data) {
  switch (algorithm) {
    case 'Bubble Sort':
      return algorithms.bubbleSort(data);
    default:
      return '';
  }
};
