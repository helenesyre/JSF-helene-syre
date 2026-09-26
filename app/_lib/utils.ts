/**
 * Calculates the discount percentage between the normal price and the discounted price.
 * @param price normal product price
 * @param discountedPrice discounted product price
 * @returns the discount percentage between the normal price and the discounted price
 */
export function calculateDiscountPercentage(
  price: number,
  discountedPrice: number,
): number {
  return Math.round(-((price - discountedPrice) / price) * 100);
}
