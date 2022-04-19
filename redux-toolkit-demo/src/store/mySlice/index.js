import { createSlice } from '@reduxjs/toolkit';

// 初始化狀態，一定要用 initialState，這是固定寫法
const initialState = {
  sitename: 'my site',
  count: 0
};

const mySlice = createSlice({
  name: 'my',
  initialState:initialState,
  reducers: {
    add(state, payload) {
      console.log(state, 'state');
      console.log(payload, 'payload');
      return { ...state, count: state.count + payload.payload };
    }
  }
});

// createSlice 創建的對象帶有 actions 屬性，將 actions 導出給 view 調用
export const myAction = mySlice.actions;

// export const asyncAdd = (params) => async (dispath) => {
//   const data = await Promise.resolve(params); //request api
//   dispath(myAction.add(data));
// };

// 導出 slice 中的 reducer
export default mySlice.reducer;
