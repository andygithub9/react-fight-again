import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { myAction /*asyncAdd*/ } from '../store/mySlice';

const ReduxToolkitDemo = () => {
  const sitename = useSelector((state) => state.my.sitename);
  const count = useSelector((state) => state.my.count);
  const dispatch = useDispatch();

  const btn_add_click = () => {
    dispatch(myAction.add(1));
  };

  // const btn_addSync_click = () => {
  //   dispatch(asyncAdd(5));
  // };

  return (
    <React.Fragment>
      <h1>ReduxToolkitDemo</h1>
      <h2>{sitename}</h2>
      <h2>{`${count}`}</h2>
      <hr />
      <button onClick={btn_add_click}>add</button>
      {/* <button onClick={btn_addSync_click}>async add</button> */}
      {/* <button onClick={btn_minus_click}>minus</button>
      <button onClick={btn_multiplly_click}>multiplly</button> */}
    </React.Fragment>
  );
};

export default ReduxToolkitDemo;
