import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as null | string,
}

const slice = createSlice({
  name: 'appReducer',
  initialState: initialState,
  reducers: {
    setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status
    },
    setAppErrorAC(state, action: PayloadAction<{ error: null | string }>) {
      state.error = action.payload.error
    },
  },
})
export const { setAppErrorAC, setAppStatusAC } = slice.actions

export const appReducer = slice.reducer
