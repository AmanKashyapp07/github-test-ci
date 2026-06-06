const { calculateShipping } = require('./shipping');

describe('shipping calculator', () => {
  test('waives standard shipping for larger orders', () => {
    expect(calculateShipping('STANDARD', 60)).toBe(0.00);
  });

  test('charges standard shipping for smaller orders', () => {
    expect(calculateShipping('STANDARD', 20)).toBe(5.00);
  });

  test('supports express and overnight methods', () => {
    expect(calculateShipping('EXPRESS', 20)).toBe(15.00);
    expect(calculateShipping('OVERNIGHT', 20)).toBe(25.00);
  });
});