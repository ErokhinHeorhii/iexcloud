import { appReducer } from 'redux/appReduser'
import { dataReducer } from 'redux/dataReducer'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  tableData: dataReducer,
  appData: appReducer,
})
