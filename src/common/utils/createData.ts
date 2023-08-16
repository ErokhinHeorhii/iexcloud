export const createData = (
  symbol: string,
  priceDate: string,
  high: number,
  low: number,
  open: number,
  close: number
) => {
  return { symbol, priceDate, high, low, open, close }
}
