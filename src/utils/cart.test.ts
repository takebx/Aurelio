import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSubtotal,
  calculateCartCount,
  calculateDiscount,
  calculateShipping,
  calculateTotal,
  formatEuro,
  FREE_SHIPPING_THRESHOLD,
  STANDARD_SHIPPING_FEE
} from './cart.ts';

test('calculateSubtotal sums up price multiplied by quantity', () => {
  const items = [
    { id: '1', name: 'Item A', price: 2890, qty: 1 },
    { id: '2', name: 'Item B', price: 790, qty: 2 }
  ];
  assert.equal(calculateSubtotal(items), 2890 + 790 * 2); // 4470
});

test('calculateSubtotal handles empty array cleanly', () => {
  assert.equal(calculateSubtotal([]), 0);
});

test('calculateCartCount counts total quantity of pieces', () => {
  const items = [
    { id: '1', name: 'Item A', price: 100, qty: 3 },
    { id: '2', name: 'Item B', price: 200, qty: 2 }
  ];
  assert.equal(calculateCartCount(items), 5);
});

test('calculateDiscount applies correct percentage for valid coupon', () => {
  assert.equal(calculateDiscount(1000, 'ROMA1962'), 150);
  assert.equal(calculateDiscount(1000, 'sartoria'), 100);
  assert.equal(calculateDiscount(1000, 'INVALID'), 0);
  assert.equal(calculateDiscount(1000, null), 0);
});

test('calculateShipping waives shipping above threshold', () => {
  assert.equal(calculateShipping(0), 0);
  assert.equal(calculateShipping(FREE_SHIPPING_THRESHOLD - 1), STANDARD_SHIPPING_FEE);
  assert.equal(calculateShipping(FREE_SHIPPING_THRESHOLD), 0);
  assert.equal(calculateShipping(2500), 0);
});

test('calculateTotal computes subtotal minus discount plus shipping', () => {
  // Free shipping with 10% discount on 2000 => 2000 - 200 + 0 = 1800
  const items = [{ id: '1', name: 'Borsa', price: 2000, qty: 1 }];
  assert.equal(calculateTotal(items, 'SARTORIA'), 1800);

  // Under threshold: 500 => 500 + 45 = 545
  const cheapItems = [{ id: '2', name: 'Foulard', price: 500, qty: 1 }];
  assert.equal(calculateTotal(cheapItems, null), 545);
});

test('formatEuro formats numbers to Italian currency display format', () => {
  const formatted = formatEuro(2890);
  assert.ok(formatted.includes('€'));
  assert.ok(formatted.includes('2.890') || formatted.includes('2890'));
});
