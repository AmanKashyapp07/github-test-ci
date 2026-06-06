function calculateShipping(method = 'STANDARD', orderTotal = 0) {
  if (typeof orderTotal !== 'number' || orderTotal < 0) {
    throw new Error('Order total must be a non-negative number.');
  }

  if (method === 'EXPRESS') {
    return 15.00;
  }

  if (method === 'OVERNIGHT') {
    return 25.00;
  }

  if (method === 'STANDARD') {
    return orderTotal >= 50 ? 0.00 : 5.00;
  }

  throw new Error('Unsupported shipping method.');
}

module.exports = { calculateShipping };