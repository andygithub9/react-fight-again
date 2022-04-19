import React from 'react'

// useSelector 鉤子用來取得狀態
// useDispatch 鉤子用來取得 dispatch 方法, 通過 dispatch 調用 reducer 的方法
import { useSelector, useDispatch } from 'react-redux'

// 引入 actions
import { authActions } from '../store/authSlice'
import { mywebActions } from '../store/mywebSlice'
import { getSwFilms } from '../store/asyncAction'

const ReduxToolkitDemo = () => {
  const sitename = useSelector((state) => state.myweb.sitename)
  const count = useSelector((state) => state.myweb.count)
  const isAuthed = useSelector((state) => state.auth.isAuthed)
  const swFilmsList = useSelector((state) => state.myweb.swFilmsList)

  const dispatch = useDispatch()

  const btn_add_click = () => {
    dispatch(mywebActions.add())
  }
  const btn_minus_click = () => {
    dispatch(mywebActions.minus())
  }
  const btn_multiply_click = () => {
    dispatch(mywebActions.multiply(10))
  }
  const btn_login_click = () => {
    dispatch(authActions.login())
  }
  const btn_logout_click = () => {
    dispatch(authActions.logout())
  }

  // dispatch thunk
  const btn_list_sw_films_click = () => {
    dispatch(getSwFilms())
  }

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
      <hr />
      <button onClick={btn_list_sw_films_click}>get sw films</button>
      <br />
      {swFilmsList.map((ele) => {
        return <h3 key={ele.title}>{ele.title}</h3>
      })}
    </React.Fragment>
  )
}

export default ReduxToolkitDemo
