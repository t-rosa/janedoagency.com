import { createSlice } from '@reduxjs/toolkit'
import blogVinylText from 'images/vinyl/text/blog.svg'
import contactVinylText from 'images/vinyl/text/contact.svg'
import teamVinylText from 'images/vinyl/text/equipe.svg'
import achievementsVinylText from 'images/vinyl/text/realisations.svg'
import servicesVinylText from 'images/vinyl/text/services.svg'
import type { RootState } from 'store'

interface NavigationState {
  menu: any[]
}

const initialState: NavigationState = {
  menu: [
    {
      id: 1,
      label: 'équipe',
      url: '/team',
      delayIn: 'delay-300',
      delayOut: 'delay-600',
      vinylText: teamVinylText,
    },
    {
      id: 2,
      label: 'services',
      url: '/services',
      delayIn: 'delay-400',
      delayOut: 'delay-700',
      vinylText: servicesVinylText,
    },
    {
      id: 3,
      label: 'réalisations',
      url: '/achievements',
      delayIn: 'delay-500',
      delayOut: 'delay-800',
      vinylText: achievementsVinylText,
    },
    {
      id: 4,
      label: 'blog',
      url: '/blog',
      delayIn: 'delay-600',
      delayOut: 'delay-900',
      vinylText: blogVinylText,
    },
    {
      id: 5,
      label: 'contact',
      url: '/contact',
      delayIn: 'delay-700',
      delayOut: 'delay-1000',
      vinylText: contactVinylText,
    },
  ],
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {},
})

export const selectNavigationMenu = (state: RootState) => state.navigation.menu

export default navigationSlice.reducer
