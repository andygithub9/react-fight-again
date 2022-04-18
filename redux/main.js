const redux = require('redux')

const initState = {
  counter: 0,
}

// function reducer(state 狀態, action 行為){根據行為改變狀態}
const reducer = (state = initState, action) => {
  console.log('debug 舊狀態->', state, '傳進 reducer 的 action', action)

  let resultState = {}
  switch (action.type) {
    case 'add':
      resultState.counter = state.counter + 1
      break
    case 'minus':
      resultState.counter = state.counter - 1
      break
    case 'muliply10':
      resultState.counter = state.counter * 10
      break
    default:
      resultState.counter = state.counter
      break
  }
  console.log('debug 新狀態 ->', resultState)
  return resultState
}

// 根據 reducer 創建一個 store
const store = redux.createStore(reducer)

// store.subscribe() , 訂閱 store , store 中的狀態發生改變就會觸發回調函數
store.subscribe(() => {
  console.log('store 訂閱的狀態更新了 ->', store.getState())
})

// store.dispatch(action) , dispatch action 到 reducer 更新狀態
store.dispatch({ type: 'add' })
store.dispatch({ type: 'add' })
store.dispatch({ type: 'minus' })
store.dispatch({ type: 'muliply10' })
