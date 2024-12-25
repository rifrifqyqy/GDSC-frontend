// src/lib/utils/currency.js
/**
 * @param {string | number | bigint} price
 */
export function formatToRupiah(price) {
	// @ts-ignore
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(Number(price));
}
