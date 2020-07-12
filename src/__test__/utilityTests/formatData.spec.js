const { formatData } = require('../../utilities/utilities');

describe('Format data correctly parses data and outputs correct format', () => {
  let data = null;

  beforeEach(() => {
    data = '';
  });

  it('Treats basic strings as strings', () => {
    data = 'a,b,c,d,e,f';

    let result = formatData(data, 'string');

    expect(result).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });

  it('Handles weirdly formatted strings', () => {
    data = 'a,    b c,   d         e     ,        f';

    let result = formatData(data, 'string');

    expect(result).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });

  it('Correctly treats numbers as strings when using string type', () => {
    data = '23,   67  hyj   90   ,   was';

    let result = formatData(data, 'string');

    expect(result).toEqual(['23', '67', 'hyj', '90', 'was']);
  });

  it('Treats basic numbers as numbers', () => {
    data = '1,2,3,4,5,6';

    let result = formatData(data, 'number');

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Handles weirdly formatted strings for numbers', () => {
    data = '1,    2 3,4       ,      5 6';

    let result = formatData(data, 'number');

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('Error checking for number types', () => {
  let data = null;

  beforeEach(() => {
    data = '';
  });

  it('Catches string in "number" data - 1', () => {
    data = '56, 89 hello  , 12, 10';

    let result;
    let errorOccured = false;
    try {
      result = formatData(data, 'number');
    } catch (err) {
      errorOccured = true;
      expect(err.message).toBe(
        'Data is selected to be numbers, but we failed to convert value: hello'
      );
    }

    expect(errorOccured).toBe(true);
  });

  it('Catches string in "number" data - 2', () => {
    data = 'salj 56, 89 12, 10';

    let result;
    let errorOccured = false;
    try {
      result = formatData(data, 'number');
    } catch (err) {
      errorOccured = true;
      expect(err.message).toBe(
        'Data is selected to be numbers, but we failed to convert value: salj'
      );
    }

    expect(errorOccured).toBe(true);
  });
});
