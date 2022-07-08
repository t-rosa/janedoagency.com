import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'store'

type Page = {
  id: number
  label: string
  url: string
  delayIn: string
  delayOut: string
  vinylText: string
}

interface NavigationState {
  homePage: Page
  menu: Page[]
  currentPage: Page
}

const initialState: NavigationState = {
  homePage: {
    id: 0,
    label: 'accueil',
    url: '/',
    delayIn: '',
    delayOut: '',
    vinylText:
      'https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318248/accueil_juyrqb.svg',
  },
  menu: [
    {
      id: 1,
      label: 'équipe',
      url: '/team',
      delayIn: 'delay-300',
      delayOut: 'delay-600',
      vinylText:
        'https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318249/equipe_wpe5z4.svg',
    },
    {
      id: 2,
      label: 'services',
      url: '/services',
      delayIn: 'delay-400',
      delayOut: 'delay-700',
      vinylText:
        'https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657319234/services_ryo3co.svg',
    },
    {
      id: 3,
      label: 'réalisations',
      url: '/achievements',
      delayIn: 'delay-500',
      delayOut: 'delay-800',
      vinylText:
        'https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318250/realisations_ypzpnh.svg',
    },
    {
      id: 4,
      label: 'blog',
      url: '/blog',
      delayIn: 'delay-600',
      delayOut: 'delay-900',
      vinylText:
        'https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318247/blog_vakxij.svg',
    },
    {
      id: 5,
      label: 'contact',
      url: '/contact',
      delayIn: 'delay-700',
      delayOut: 'delay-1000',
      vinylText:
        'https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318248/contact_dlp8wx.svg',
    },
  ],
  currentPage: {
    id: 0,
    label: 'accueil',
    url: '/',
    delayIn: '',
    delayOut: '',
    vinylText:
      'https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318248/accueil_juyrqb.svg',
  },
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    synchronizeCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const selectNavigationMenu = (state: RootState) => state.navigation.menu
export const selectHomePage = (state: RootState) => state.navigation.homePage
export const selectCurrentPage = (state: RootState) => state.navigation.currentPage

export const { synchronizeCurrentPage } = navigationSlice.actions
export default navigationSlice.reducer
