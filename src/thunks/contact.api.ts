import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ContactFormData } from 'interfaces/contact'

async function postContactFormData(contactFormData: ContactFormData) {
  const response = await axios.post('/api/contact', contactFormData)
  return response.data
}

export const sendMail = createAsyncThunk('contact/sendMail', postContactFormData)
