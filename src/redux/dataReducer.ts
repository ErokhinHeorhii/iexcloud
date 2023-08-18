import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { cloudIexapisApi, DataForDisplayingType } from 'servises/api'
import { setAppErrorAC, setAppStatusAC } from 'redux/appReduser'
import { errorUtils } from 'common/utils/errorUtils'
import { initialState } from 'common/const/initialState'

export const getRatesTC = createAsyncThunk('dataReducer/getDataTC', async (_, thunkAPI) => {
  thunkAPI.dispatch(setAppStatusAC({ status: 'loading' }))
  try {
    const res = await cloudIexapisApi.getData()
    thunkAPI.dispatch(setAppStatusAC({ status: 'succeeded' }))
    thunkAPI.dispatch(setAppErrorAC({ error: null }))
    return res.data
  } catch (error) {
    const err = error as Error | AxiosError<{ error: string }>
    errorUtils(err, thunkAPI.dispatch)
  }
})

const slice = createSlice({
  name: 'dataReducer',
  initialState,
  reducers: {
    resetAC() {
      return initialState
    },
  },
  extraReducers: builder => {
    builder.addCase(getRatesTC.fulfilled, (state, action) => {
      state.dataForDisplaying = action?.payload as DataForDisplayingType[]
    })
  },
})

export const { resetAC } = slice.actions
export const dataReducer = slice.reducer
