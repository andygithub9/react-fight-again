import { configureStore } from '@reduxjs/toolkit';
import myReducer from './mySlice';

const store = configureStore({
  // 將 mySlice 文件導出的 myReducer 放到 reducer.my 屬性中調用的時候
  reducer: { my: myReducer } // <=== state.aaa.count
  //reducer: mySlice.reducer <＝＝＝ state
});

/**
 *                (toolkit)- action
 * view => store => slice -
 *                          - reducer
 *
 * view -> dispatch(action)-> store-> reducer
 */
export default store;
