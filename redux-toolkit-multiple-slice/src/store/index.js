import { configureStore } from '@reduxjs/toolkit'

import authSlice from './authSlice'
import mywebSlice from './mywebSlice'

// 配置 store
const store = configureStore({
  // reducer: {
  //   切片的 name: 切片.reducer,
  //   切片的 name: 切片.reducer,
  // }
  reducer: {
    myweb: mywebSlice.reducer,
    auth: authSlice.reducer,
  },
})
// 導出 store
export default store
