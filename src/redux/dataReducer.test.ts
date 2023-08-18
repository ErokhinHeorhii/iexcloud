import { DataForDisplayingType, GetDataResponseType } from '../servises/api'
import { dataReducer, getRatesTC } from './dataReducer'

let startState: Array<DataForDisplayingType>
beforeEach(() => {
  startState = [
    {
      close: 193.99,
      high: 194.32,
      low: 191.81,
      open: 191.9,
      priceDate: '2023-07-17',
      symbol: 'AAPL',
      volume: 50520159,
      id: 'HISTORICAL_PRICES',
      key: 'AAPL',
      subkey: '',
      date: '2023-07-17',
      updated: 1692188359000,
      changeOverTime: 0,
      marketChangeOverTime: 0,
      uOpen: 191.9,
      uClose: 193.99,
      uHigh: 194.32,
      uLow: 191.81,
      uVolume: 50520159,
      fOpen: 191.383,
      fClose: 193.467,
      fHigh: 193.796,
      fLow: 191.293,
      fVolume: 50520159,
      label: 'Jul 17, 23',
      change: 0,
      changePercent: 0,
    },
    {
      close: 193.73,
      high: 194.35,
      low: 191.15,
      open: 191.7,
      priceDate: '2023-07-18',
      symbol: 'AAPL',
      volume: 48353774,
      id: 'HISTORICAL_PRICES',
      key: 'AAPL',
      subkey: '',
      date: '2023-07-18',
      updated: 1692188365000,
      changeOverTime: 0,
      marketChangeOverTime: 0,
      uOpen: 191.9,
      uClose: 193.99,
      uHigh: 194.32,
      uLow: 191.81,
      uVolume: 50520159,
      fOpen: 191.383,
      fClose: 193.467,
      fHigh: 193.796,
      fLow: 191.293,
      fVolume: 50520159,
      label: 'Jul 17, 23',
      change: 0,
      changePercent: 0,
    },
  ]
})

test('stockData should be set', () => {
  const action = getRatesTC.fulfilled(startState, 'requestId')
  const endState = dataReducer({} as GetDataResponseType, action)
  expect(endState.dataForDisplaying.length).toBe(2)
})
