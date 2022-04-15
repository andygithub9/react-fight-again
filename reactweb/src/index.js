import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// react 18 版本後不再使用 react-dom 的 render 方法，改用 react-dom/client 的 createRoot 方法綁定根元素
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
