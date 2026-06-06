const { buildOrder } = require('./order');

describe('order builder', () => {
  test('creates a final order summary', () => {
    const order = buildOrder(
      [
        { id: 'item-1', quantity: 2 },
        { id: 'item-2', quantity: 1 }
      ],
      { subtotal: 125, discount: 10 },
      5
    );

    expect(order.itemCount).toBe(3);
    expect(order.subtotal).toBe(125.00);
    expect(order.discount).toBe(10.00);
    expect(order.shipping).toBe(5.00);
    expect(order.total).toBe(120.00);
  });

  test('rejects invalid input', () => {
    expect(() => buildOrder([], { subtotal: 0, discount: 0 }, 0)).toThrow('Order items are required.');
  });
});

////testing-5