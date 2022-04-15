import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNews = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h1>PageNews</h1>
      <hr />
      <br />

      <NavLink to="/news/101">news1</NavLink>
      <br />
      <NavLink to="/news/102">news2</NavLink>
      <br />
      <NavLink to="/news/103">news3</NavLink>
    </div>
  )
}

export default PageNews
