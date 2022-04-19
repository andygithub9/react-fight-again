import { createSlice } from '@reduxjs/toolkit'

// 初始化狀態
const mywebInitialState = {
  sitename: 'my web site',
  count: 0,
  swFilmsList: [],
}
// 創建切片
const mywebSlice = createSlice({
  name: 'myweb',
  initialState: mywebInitialState,
  reducers: {
    add(state) {
      state.count++
    },
    minus(state) {
      state.count--
    },
    multiply(state, action) {
      state.count *= action.payload
    },
    listSwFilms(state, action) {
      state.swFilmsList = action.payload
    },
  },
})
// 導出切片 slice 的 action
export const mywebActions = mywebSlice.actions
// 導出切片 slice
export default mywebSlice
