import { configureStore } from '@reduxjs/toolkit'
import overalyReducer from 'slices/overlay'
import navigationReducer from 'slices/navigation'
import contactReducer from 'slices/contact'
import modalReducer from 'slices/modal'

export const store = configureStore({
  reducer: {
    overlay: overalyReducer,
    navigation: navigationReducer,
    contact: contactReducer,
    modal: modalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
