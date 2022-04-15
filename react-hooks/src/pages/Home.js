import React, { useEffect, useState } from "react";

const Home = () => {
  // 每次組件渲染都會執行
  console.log("每次組件渲染都會執行");

  // 調用 setFLG1, setFLG2 改變狀態時都會重新渲染組件
  const [FLG1, setFLG1] = useState(false);
  const [FLG2, setFLG2] = useState(false);

  // useEffect(callback, [要監視的值])
  // 當被監視的值變動時會執行回調函數中的代碼
  useEffect(() => {
    // 當 FLG1 的值變動時 console.log("觸發 useEffect")
    console.log("觸發 useEffect");
  }, [FLG1]);

  return (
    <React.Fragment>
      <h1>Home</h1>
      <h2>FLG1: {FLG1 + ""}</h2>
      <h2>FLG1: {FLG2 + ""}</h2>
      <hr />
      <button onClick={() => setFLG1(!FLG1)}>切換FLG1</button>
      <br />
      <button onClick={() => setFLG2(!FLG2)}>切換FLG2</button>
    </React.Fragment>
  );
};

export default Home;
