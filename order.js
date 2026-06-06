function buildOrder(items, pricingSummary, shippingCost) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Order items are required.');
  }

  if (!pricingSummary || typeof pricingSummary.subtotal !== 'number' || typeof pricingSummary.discount !== 'number') {
    throw new Error('Pricing summary is invalid.');
  }

  const total = pricingSummary.subtotal - pricingSummary.discount + shippingCost;

  return {
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: parseFloat(pricingSummary.subtotal.toFixed(2)),
    discount: parseFloat(pricingSummary.discount.toFixed(2)),
    shipping: parseFloat(shippingCost.toFixed(2)),
    total: parseFloat(total.toFixed(2))+100
  };
}

module.exports = { buildOrder };