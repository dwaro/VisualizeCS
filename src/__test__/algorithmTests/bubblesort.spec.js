const { bubbleSort } = require('../../algorithms/algorithms');

describe('Bubble Sort algorithm returns correct sorted data', () => {
  let data = [];

  beforeEach(() => {
    data.length = 0;
  });

  it('Empty input --> empty output', () => {
    const result = bubbleSort(data);
    expect(result.data).toEqual(data);
  });

  it('Odd length input', () => {
    data = [1];
    const result = bubbleSort(data);
    expect(result.data).toEqual(data);
  });

  it('Even length input', () => {
    data = [2, 1];
    const result = bubbleSort(data);
    expect(result.data).toEqual([1, 2]);
  });

  it('Sorting 999 elements', () => {
    data = buildData(999);
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });

  it('Sorting 1,001 elements', () => {
    data = buildData(1001);
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });

  // caps somewhere between 5,000 - 10,000 array size
  it('Sorting 4,999 elements', () => {
    data = buildData(4999);
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });

  // caps somewhere between 5,000 - 10,000 array size
  it('Sorting 5,002 elements', () => {
    data = buildData(5002);
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });
});

describe('Bubble Sort sorted string data', () => {
  let data = [];

  beforeEach(() => {
    data.length = 0;
  });

  it('Odd length str input', () => {
    data = ['Jake'];
    const result = bubbleSort(data);
    expect(result.data).toEqual(['Jake']);
  });

  it('Even length str input', () => {
    data = ['Jake', 'Bob'];
    const result = bubbleSort(data);
    expect(result.data).toEqual(['Bob', 'Jake']);
  });

  it('2+ length str input', () => {
    data = [
      'Jake',
      'Bob',
      'Elsa',
      'Abe',
      '23',
      'Zoe',
      'Hank',
      'Sam',
      'Ray',
      '562',
    ];
    const result = bubbleSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });
});

//describe('Bubble sort correctly details swaps during its sort', () => {});

const buildData = (size) => {
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push(Math.floor(Math.random() * 1000));
  }
  return data;
};
