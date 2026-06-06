const { applyDiscount, calculateTax } = require('./pricing');

describe('pricing helpers', () => {
  test('applies supported discounts', () => {
    expect(applyDiscount(100, 'SAVE10')).toBe(10.00);
    expect(applyDiscount(100, 'SAVE20')).toBe(20.00);
  });

  test('returns zero discount for unknown codes', () => {
    expect(applyDiscount(100, 'NONE')).toBe(0.00);
  });

  test('calculates tax using the provided rate', () => {
    expect(calculateTax(125, 0.08)).toBe(10.00);
  });
});