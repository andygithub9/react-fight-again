import { createSlice } from '@reduxjs/toolkit'

// 初始化狀態
const initialAuthState = {
  isAuthed: false,
}
// 創建切片
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthed = true
    },
    logout(state) {
      state.isAuthed = false
    },
  },
})

// 導出切片 slice 的 actions
export const authActions = authSlice.actions
// 導出切片 slice
export default authSlice
