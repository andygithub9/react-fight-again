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

## 使用 useNavigate 導航到指定的 path

https://stackoverflow.com/questions/63471931/using-history-with-react-router-dom-v6
https://reacttraining.com/blog/react-router-v6-pre/#suspense-ready-navigation

```js
// useNavigate 會返回一個函數，在此函數傳入 path 會導航到該 path 對應的元素
const navigate = useNavigate();
const btn_login_click = () => {
  navigate("/login");
};
const btn_logout_click = () => {
  navigate("/");
};
```
