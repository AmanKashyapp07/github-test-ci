function applyDiscount(subtotal, discountCode = null) {
  if (typeof subtotal !== 'number' || subtotal < 0) {
    throw new Error('Subtotal must be a non-negative number.');
  }

  let discount = 0;

  if (discountCode === 'SAVE10') {
    discount = subtotal * 0.1;
  } else if (discountCode === 'SAVE20') {
    discount = subtotal * 0.2;
  }

  return parseFloat(discount.toFixed(2));
}

function calculateTax(subtotal, taxRate = 0.08) {
  if (typeof subtotal !== 'number' || subtotal < 0) {
    throw new Error('Subtotal must be a non-negative number.');
  }

  if (typeof taxRate !== 'number' || taxRate < 0) {
    throw new Error('Tax rate must be a non-negative number.');
  }

  return parseFloat((subtotal * taxRate).toFixed(2));
}

module.exports = { applyDiscount, calculateTax };