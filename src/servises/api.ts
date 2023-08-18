import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cloud.iexapis.com/',
})

export type DataForDisplayingType = {
  close: number
  high: number
  low: number
  open: number
  priceDate: string
  symbol: string
  volume: number
  id: string
  key: string
  subkey: string
  date: string
  updated: number
  changeOverTime: number
  marketChangeOverTime: number
  uOpen: number
  uClose: number
  uHigh: number
  uLow: number
  uVolume: number
  fOpen: number
  fClose: number
  fHigh: number
  fLow: number
  fVolume: number
  label: string
  change: number
  changePercent: number
}
export type GetDataResponseType = {
  dataForDisplaying: DataForDisplayingType[]
}
export const cloudIexapisApi = {
  getData() {
    return instance.get<DataForDisplayingType[]>(
      `/stable/stock/AAPL/chart/1m?token=${process.env.REACT_APP_API_KEY}`
    )
  },
}
