import { configureStore } from '@reduxjs/toolkit'
import overalyReducer from 'slices/overlay'
import navigationReducer from 'slices/navigation'

export const store = configureStore({
  reducer: {
    overlay: overalyReducer,
    navigation: navigationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
