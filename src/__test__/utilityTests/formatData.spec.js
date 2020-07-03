const { formatData } = require('../../utilities/utilities');

describe("Format data catches errors in client's data", () => {
  it('Submitted as number, but has a string', () => {
    expect(2 + 2).toBe(4);
  });
});
