export type CreateDataReturnType = {
  symbol: string
  priceDate: string
  high: number
  low: number
  open: number
  close: number
}
export const createData = (
  symbol: string,
  priceDate: string,
  high: number,
  low: number,
  open: number,
  close: number
): CreateDataReturnType => {
  return { symbol, priceDate, high, low, open, close }
}
