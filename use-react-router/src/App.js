import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import PageAbout from './components/PageAbout'
import PageHome from './components/PageHome'
import PageNews from './components/PageNews'
import PageNewsDetail from './components/PageNewsDetail'
import PageAboutChild from './components/PageAboutChild'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {/* 路油重定向 */}
          {/* https://stackoverflow.com/questions/69868956/how-to-redirect-in-react-router-v6 */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<PageHome />} />

          {/* 定義嵌套路由 */}
          {/* https://www.geeksforgeeks.org/implement-nested-routes-in-react-js-react-router-dom-v6/ */}
          <Route path="/about" element={<PageAbout />}>
            <Route path="child" element={<PageAboutChild />} />
          </Route>

          <Route path="/news" element={<PageNews />} />
          <Route path="/news/:id" element={<PageNewsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
