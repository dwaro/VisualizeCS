const { bubbleSort } = require('../../algorithms/algorithms');

describe('Bubble Sort algorithm returns correct sorted data', () => {
  it('Empty input --> empty output', () => {
    const data = [];
    const result = bubbleSort(data);
    expect(result.data).toEqual(data);
  });

  it('Odd length input', () => {
    const data = [1];
    const result = bubbleSort(data);
    expect(result.data).toEqual([1]);
  });

  it('Even length input', () => {
    const data = [2, 1];
    const result = bubbleSort(data);
    expect(result.data).toEqual([1, 2]);
  });

  it('Effectively medium input -- 1', () => {
    const data = buildData(999);
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });

  it('Effectively medium input -- 2', () => {
    const data = buildData(1001);
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });

  // caps somewhere between 5,000 - 10,000 array size
  it('Effectively large input -- 1', () => {
    const data = buildData(4999);
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });

  // caps somewhere between 5,000 - 10,000 array size
  it('Effectively large input -- 2', () => {
    const data = buildData(5001);
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });
});

const buildData = (size) => {
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push(Math.floor(Math.random() * 1000));
  }
  return data;
};
