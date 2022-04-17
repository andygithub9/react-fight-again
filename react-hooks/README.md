## context 穿透組件傳遞數據

app.js

```js
import React, { createContext } from 'react'
import About from './pages/About'

// context 中文翻譯是上下文，可以理解為全局變量，context 可以穿透組件傳遞數據(例如: 爺孫組件的信息傳遞)
// 創建 context
export const AboutContentContext = createContext()

function App() {
  const aboutContent = {
    text: 'about content use Context',
    author: 'me',
    sayHello: (param) => {
      console.log(`Hello ${param}`)
    },
  }
  return (
    <div>
      {/* <Context對象.Provider value={傳遞給子組件的值}> */}
      <AboutContentContext.Provider value={aboutContent}>
        <About></About>
      </AboutContentContext.Provider>
    </div>
  )
}

export default App
```

---

page/About.js

```js
import React, { useContext } from 'react'

import { AboutContentContext } from '../App'

const About = () => {
  const AboutContent = useContext(AboutContentContext)
  console.log('AboutContent: ', AboutContent)
  return (
    <React.Fragment>
      <h1>About</h1>
      <hr />
      <h2>text: {AboutContent.text}</h2>
      <h3>author: {AboutContent.author}</h3>
      <button
        onClick={() =>
          AboutContent.sayHello('我是 AboutContext 中的 sayHello 方法')
        }
      >
        觸發 AboutContentContext 的 sayHello 方法
      </button>
    </React.Fragment>
  )
}
export default About
```
