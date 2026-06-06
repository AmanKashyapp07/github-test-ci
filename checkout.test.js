const { calculateTotal, validateStock, processPayment } = require('./checkout');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('E-commerce Checkout Pipeline Tests', () => {

  const sampleInventory = {
    'item-1': 10,
    'item-2': 5,
    'item-3': 0
  };

  test('Stage 1/4: Cart total and shipping calculations', async () => {
    console.log("💳 Starting cart calculation validations...");
    await sleep(15000); // 15 seconds delay

    const items = [
      { id: 'item-1', name: 'Wireless Mouse', price: 25.00, quantity: 2 },
      { id: 'item-2', name: 'Mechanical Keyboard', price: 75.00, quantity: 1 }
    ];

    const result = calculateTotal(items, null, 'STANDARD');
    expect(result.subtotal).toBe(125.00);
    expect(result.shipping).toBe(5.00);
    expect(result.total).toBe(130.00);
  }, 20000);

  test('Stage 2/4: Inventory and stock checks', async () => {
    console.log("📦 Checking inventory and stock availability...");
    await sleep(15000); // 15 seconds delay

    const validItems = [
      { id: 'item-1', name: 'Wireless Mouse', price: 25.00, quantity: 2 }
    ];
    expect(validateStock(validItems, sampleInventory)).toBe(true);

    const invalidItems = [
      { id: 'item-3', name: 'Out of Stock Headset', price: 40.00, quantity: 1 }
    ];
    expect(() => validateStock(invalidItems, sampleInventory)).toThrow("Insufficient stock");
  }, 20000);

  test('Stage 3/4: Discount code validation rules', async () => {
    console.log("🏷 Validating discount codes and coupon rules...");
    await sleep(15000); // 15 seconds delay

    const items = [
      { id: 'item-1', name: 'Wireless Mouse', price: 50.00, quantity: 1 }
    ];

    // SAVE10 code (10% discount)
    const result1 = calculateTotal(items, 'SAVE10', 'STANDARD');
    expect(result1.subtotal).toBe(50.00);
    expect(result1.discount).toBe(5.00);
    expect(result1.total).toBe(50.00); // 50 - 5 + 5 = 50

    // FREESHIP code (free shipping if >= 50)
    const result2 = calculateTotal(items, 'FREESHIP', 'STANDARD');
    expect(result2.shipping).toBe(0.00);
    expect(result2.total).toBe(50.00);
  }, 20000);

  test('Stage 4/4: Payment gateway simulation', async () => {
    console.log("💸 Initializing secure payment gateway handshake...");
    await sleep(15000); // 15 seconds delay

    const payment = await processPayment("4111222233334444", 45.00);
    expect(payment.success).toBe(true);
    expect(payment.transactionId).toMatch(/^TX-/);

    await expect(processPayment("", 45.00)).rejects.toThrow("Invalid credit card number.");
  }, 20000);

});
