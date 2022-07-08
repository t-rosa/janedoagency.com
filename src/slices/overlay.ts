import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

interface OverlayState {
  isOpen: boolean
}

const initialState: OverlayState = {
  isOpen: false,
}

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    openOverlay: (state) => {
      state.isOpen = true
    },
    closeOverlay: (state) => {
      state.isOpen = false
    },
    toggleOverlay: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { openOverlay, closeOverlay, toggleOverlay } = overlaySlice.actions

export const selectOverlay = (state: RootState) => state.overlay

export default overlaySlice.reducer
