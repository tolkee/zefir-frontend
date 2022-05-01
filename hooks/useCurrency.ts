// Hook used to get a formatter for a given currency
export default function useCurrency(currency: string) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0
  })
  return {c: formatter.format};
};