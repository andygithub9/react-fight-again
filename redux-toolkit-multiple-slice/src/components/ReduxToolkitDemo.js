import React from 'react';
// useSelector 鉤子用來取得狀態
// useDispatch 鉤子用來取得 dispatch 方法, 通過 dispatch 調用 reducer 的方法
import { useSelector, useDispatch } from 'react-redux';
import { myAction, authAction } from '../store';

const ReduxToolkitDemo = () => {
  const sitename = useSelector((state) => state.myweb.sitename);
  const count = useSelector((state) => state.myweb.count);
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  const dispatch = useDispatch();

  const btn_add_click = () => {
    dispatch(myAction.add());
  };
  const btn_minus_click = () => {
    dispatch(myAction.minus());
  };
  const btn_multiply_click = () => {
    dispatch(myAction.multiply(10));
  };
  const btn_login_click = () => {
    dispatch(authAction.login());
  };
  const btn_logout_click = () => {
    dispatch(authAction.logout());
  };

  return (
    <React.Fragment>
      <h2>{sitename}</h2>
      <h2>{count}</h2>
      <button onClick={btn_add_click}>Add</button>
      <button onClick={btn_minus_click}>minus</button>
      <button onClick={btn_multiply_click}>multiply</button>
      <hr />
      isLogin: {`${isAuthed}`}
      <br />
      {isAuthed ? (
        <button onClick={btn_logout_click}>登出</button>
      ) : (
        <button onClick={btn_login_click}>登入</button>
      )}
    </React.Fragment>
  );
};

export default ReduxToolkitDemo;
