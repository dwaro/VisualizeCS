const { bubbleSort } = require('../../algorithms/algorithms');

describe('Bubble Sort algorithm returns correct sorted data', () => {
  it('Empty input --> empty output', () => {
    const data = [];
    const result = bubbleSort(data);
    expect(result.data).toEqual(data);
  });
});
