import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// react-router-dom-v6 嵌套路由
// https://www.geeksforgeeks.org/implement-nested-routes-in-react-js-react-router-dom-v6/
const PageAbout = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h1>PageAbout</h1>
      <div>
        <Link to="/about/child">顯示 about 的子路由</Link>
      </div>
      <hr />
      <br />
      <Outlet /> {/* 顯示子路由的區域 */}
    </div>
  )
}

export default PageAbout
