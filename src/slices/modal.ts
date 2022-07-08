import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { sendMail } from 'thunks/contact.api'

interface ModalState {
  isOpen: boolean
  type: 'success' | 'error' | 'info' | 'loading' | null
  title: string | null
  message: string | null
}

const initialState: ModalState = {
  isOpen: false,
  type: null,
  title: null,
  message: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMail.pending, (state) => {
        state.isOpen = true
        state.type = 'loading'
        state.title = 'Chargement...'
      })
      .addCase(sendMail.fulfilled, (state) => {
        state.isOpen = true
        state.type = 'success'
        state.title = 'Email envoyé avec succès'
      })
      .addCase(sendMail.rejected, (state) => {
        state.isOpen = true
        state.type = 'error'
        state.title = "Il y a eu une érreur lors de l'envoie du mail"
      })
  },
})

export const selectModal = (state: RootState) => state.modal
export const { closeModal } = modalSlice.actions

export default modalSlice.reducer
