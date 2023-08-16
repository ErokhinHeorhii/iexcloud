import React from 'react'
import { store } from 'redux/store'
import { Provider } from 'react-redux'
import './App.css'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/global.scss'
import StockTable from './components/table/Table'

function App() {
  return (
    <Provider store={store}>
      <StockTable />
    </Provider>
  )
}

export default App
