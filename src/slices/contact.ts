import { createSlice, SerializedError } from '@reduxjs/toolkit'
import { ContactFormData } from 'interfaces/contact'
import type { RootState } from 'store'
import { sendMail } from 'thunks/contact.api'

interface ContactState {
  formData: ContactFormData
  loading: 'idle' | 'pending'
  error: SerializedError | null
}

const initialState: ContactState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
    agreed: false,
  },
  loading: 'idle',
  error: null,
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toggleAgreed: (state) => {
      state.formData.agreed = !state.formData.agreed
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMail.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(sendMail.fulfilled, (state) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
        }
      })
      .addCase(sendMail.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.error = action.error
          state.loading = 'idle'
        }
      })
  },
})

export const selectContact = (state: RootState) => state.contact
export const { toggleAgreed } = contactSlice.actions
export default contactSlice.reducer
