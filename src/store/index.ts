import { configureStore } from '@reduxjs/toolkit'
import overalyReducer from 'slices/overlay'

export const store = configureStore({
  reducer: {
    overlay: overalyReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
