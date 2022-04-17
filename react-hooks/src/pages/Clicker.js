import React, { useReducer } from 'react'
const Clicker = () => {
  // const [狀態, dispatch 用來調用 reducer] = useReducer(reducer函數, 狀態初始值);
  // dispatch(參數) 會將參數傳進 reducer 並調用
  // reducer(狀態, action)，reducer()函數必須有兩個形參: 狀態, action
  const [count, dispatch] = useReducer((count, action) => {
    console.log(count, action)
    switch (action.type) {
      case 'add':
        return count + action.step
      case 'minus':
        return count - action.step
      default:
        return 100
    }
  }, 100)
  return (
    <React.Fragment>
      <h1>Clicker</h1>
      <hr />
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch({ type: 'add', step: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: 'minus', step: 1 })}>-1</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: 'add', step: 10 })}>+10</button>
        <button onClick={() => dispatch({ type: 'minus', step: 10 })}>
          -10
        </button>
      </div>
    </React.Fragment>
  )
}

export default Clicker
