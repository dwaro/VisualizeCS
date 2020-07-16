const { countingSort } = require('../../algorithms/algorithms');

describe('Counting Sort correctly sorts numeric data', () => {
  let data = [];

  beforeEach(() => {
    data.length = 0;
  });

  it('Empty array --> empty result', () => {
    data = [];
    let result = countingSort(data);
    expect(result.data).toEqual([]);
  });

  it('Returns single value for 1-size array', () => {
    data = [4];
    let result = countingSort(data);
    expect(result.data).toEqual([4]);
  });

  it('Returns sorted 2-size array', () => {
    data = [4, 1];
    let result = countingSort(data);
    expect(result.data).toEqual([1, 4]);
  });

  it('Returns sorted small array', () => {
    data = [4, 1, 15, 12, 39, 23, 8];
    let result = countingSort(data);
    data.sort((a, b) => a - b);
    expect(result.data).toEqual(data);
  });

  it('Sorting 4,999 elements', () => {
    data = buildData(4999);
    let result = countingSort(data);
    data.sort((a, b) => a - b);
    expect(result.data).toEqual(data);
  });

  it('Sorting 5,002 elements', () => {
    data = buildData(5002);
    let result = countingSort(data);
    data.sort((a, b) => a - b);
    expect(result.data).toEqual(data);
  });

  it('Sorting 9,999 elements', () => {
    data = buildData(9999);
    const result = countingSort(data);
    data.sort((a, b) => a - b);
    expect(result.data).toEqual(data);
  });

  it('Sorting 10,001', () => {
    data = buildData(10001);
    const result = countingSort(data);
    data.sort((a, b) => a - b);
    expect(result.data).toEqual(data);
  });

  it('Sorting 99,999', () => {
    data = buildData(99999);
    const result = countingSort(data);
    data.sort((a, b) => a - b);
    expect(result.data).toEqual(data);
  });

  it('Sorting 100,004', () => {
    data = buildData(100004);
    const result = countingSort(data);
    data.sort((a, b) => a - b);
    expect(result.data).toEqual(data);
  });
});

describe('Counting sort correclty handles 1-sized strings or character data', () => {
  let data = [];

  beforeEach(() => {
    data.length = 0;
  });

  it('String: 1-size array', () => {
    data = ['t'];
    let result = countingSort(data);
    expect(result.data).toEqual(['t']);
  });

  it('String: 2-size array', () => {
    data = ['t', 'A'];
    let result = countingSort(data);
    expect(result.data).toEqual(['A', 't']);
  });

  it('String: 9-size array', () => {
    data = ['t', 'A', '2', '9', 'a', '1', 'E', 'B', 'p'];
    let result = countingSort(data);
    data.sort();
    expect(result.data).toEqual(data);
  });

  it('String: 28-size array', () => {
    data = [
      't',
      'A',
      '2',
      '9',
      'a',
      't',
      'A',
      'k',
      '2',
      '9',
      'a',
      '1',
      'E',
      'B',
      'p',
      '1',
      'E',
      'B',
      'p',
      't',
      'A',
      '2',
      '9',
      'a',
      '1',
      'E',
      'B',
      'p',
    ];
    let result = countingSort(data);
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
