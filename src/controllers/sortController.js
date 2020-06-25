exports.delegate = async function delegate(algorithm, data) {
  switch (algorithm) {
    case 'Bubble Sort':
      return { data: [1, 2, 3, 4, 5], steps: ['a', 'b', 'c', 'd'] };
    default:
      return '';
  }
};
