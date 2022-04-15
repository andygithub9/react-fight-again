## install react-router-dom

https://v5.reactrouter.com/web/guides/quick-start

```bash
npm i react-router-dom -S
```

## react-router-dom-v6 嵌套路由

https://www.geeksforgeeks.org/implement-nested-routes-in-react-js-react-router-dom-v6/

App.js

```jsx
<Route path="/about" element={<PageAbout />}>
  {/* 定義嵌套路由 */}
  <Route path="child" element={<PageAboutChild />} />
</Route>
```

---

PageAbout.js

```js
<div>
<Link to="/about/child">顯示 about 的子路由</Link>
</div>
<hr />
<br />
<Outlet /> {/* 顯示子路由的區域 */}
```
