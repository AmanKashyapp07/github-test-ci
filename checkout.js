/**
 * E-commerce Checkout System Logic
 */

function calculateTotal(items, discountCode = null, shippingMethod = 'STANDARD') {
  if (!Array.isArray(items) || items.length === 0) {
    return { subtotal: 0, discount: 0, shipping: 0, total: 0 };
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Apply discount codes
  let discount = 0;
  if (discountCode === 'SAVE10') {
    discount = subtotal * 0.1; // 10% off
  }

  // Calculate shipping cost
  let shipping = 0;
  if (shippingMethod === 'EXPRESS') {
    shipping = 15.00;
  } else if (shippingMethod === 'STANDARD') {
    shipping = 5.00;
  }

  if (discountCode === 'FREESHIP' && subtotal >= 50) {
    shipping = 0;
  }

  const total = Math.max(0, subtotal - discount + shipping);

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    discount: parseFloat(discount.toFixed(2)),
    shipping: parseFloat(shipping.toFixed(2)),
    total: parseFloat(total.toFixed(2))
  };
}

function validateStock(items, inventory) {
  for (const item of items) {
    const stockAvailable = inventory[item.id] || 0;
    if (item.quantity > stockAvailable) {
      throw new Error(`Insufficient stock for item: ${item.name}. Available: ${stockAvailable}, Requested: ${item.quantity}`);
    }
  }
  return true;
}

async function processPayment(cardNumber, totalAmount) {
  // Simulate payment processing delays
  if (!cardNumber || cardNumber.length < 16) {
    throw new Error("Invalid credit card number.");
  }
  if (totalAmount <= 0) {
    throw new Error("Invalid transaction amount.");
  }
  
  // Return true if payment completes
  return {
    success: true,
    transactionId: "TX-" + Math.floor(Math.random() * 1000000)
  };
}

module.exports = { calculateTotal, validateStock, processPayment };

//testing-6
