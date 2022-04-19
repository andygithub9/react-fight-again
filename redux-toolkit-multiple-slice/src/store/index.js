import { createSlice, configureStore } from '@reduxjs/toolkit';

// 初始化狀態
const mywebInitialState = {
  sitename: 'my web site',
  count: 0
};

const initialAuthState = {
  isAuthed: false
};

const mywebSlice = createSlice({
  name: 'myweb',
  initialState: mywebInitialState,
  reducers: {
    add(state) {
      state.count++;
    },
    minus(state) {
      state.count--;
    },
    multiply(state, action) {
      state.count *= action.payload;
    }
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthed = true;
    },
    logout(state) {
      state.isAuthed = false;
    }
  }
});

const store = configureStore({
  reducer: {
    myweb: mywebSlice.reducer,
    auth: authSlice.reducer
  }
});

export const myAction = mywebSlice.actions;
export const authAction = authSlice.actions;

export default store;
