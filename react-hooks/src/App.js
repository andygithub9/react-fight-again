import React, { createContext } from 'react'
// import Home from './pages/Home'
// import About from './pages/About'
// import Clicker from './pages/Clicker'
import UseMemoDemo from './pages/UseMemoDemo'

// context 中文翻譯是上下文，可以理解為全局變量，context 可以穿透組件傳遞數據(例如: 爺孫組件的信息傳遞)
// 創建 context
export const AboutContentContext = createContext()

function App() {
  // const aboutContent = {
  //   text: 'about content use Context',
  //   author: 'me',
  //   sayHello: (param) => {
  //     console.log(`Hello ${param}`)
  //   },
  // }
  return (
    <div>
      {/* useEffect demo */}
      {/* <Home></Home> */}

      {/* Context demo */}
      {/* <Context對象.Provider value={傳遞給子組件的值}> */}
      {/* <AboutContentContext.Provider value={aboutContent}>
        <About></About>
      </AboutContentContext.Provider> */}

      {/* useReducer demo */}
      {/* <Clicker></Clicker> */}

      {/* UseMemoDemo */}
      <UseMemoDemo></UseMemoDemo>
    </div>
  )
}

export default App
