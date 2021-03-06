import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface AuthState {
  email: string | null
  password: string | null
  isLoggedIn: boolean
}

const email = localStorage.getItem('email')
const password = localStorage.getItem('password')
const isLoggedIn = email && password ? true : false

const initialState: AuthState = {
  email: email,
  password: password,
  isLoggedIn: isLoggedIn
}

export const authSlice = createSlice({
  name: 'AUTH',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => state = action.payload,
    logoutUser: (state, action: PayloadAction<AuthState>) => {
      state.email = null
      state.password = null
      state.isLoggedIn = false
    },
  },
})

export const { setUser, logoutUser } = authSlice.actions

export const selectCount = (state: RootState) => state.auth

export default authSlice.reducer