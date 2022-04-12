// Fragment 類似於 div 元素，它的用處是最外層不用不需要用 div 包起來，多個 Fragment 可以在結構的同一層
import React, { Fragment, useState } from "react";

const ItemDetail = (prop) => {
  // useState(初始狀態) 方法會返回一個陣列，元素 0 是初始狀態，元素 1 是改變狀態的方法
  let [article, setArticle] = useState(prop.article);

  const btn_click = (e) => {
    console.log("btn_click", Math.random());

    // 調用 setArticle 改變 article 變量的狀態
    setArticle("標題被改變了");
  };

  return (
    <Fragment>
      {/* 注意: jsx 元素中不能寫 class 要寫 className */}
      {/* tailwind rwd 的寫法 https://tailwindcss.com/docs/responsive-design */}
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <a href={prop.link}>
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={prop.image}
            />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a
                className="no-underline hover:underline text-black"
                href={prop.link}
              >
                {article}
              </a>
            </h1>
            <p className="text-grey-darker text-sm">{prop.date}</p>
          </header>

          <div className="text-center py-3">
            <button
              onClick={btn_click}
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-auto"
            >
              改變標題
            </button>
          </div>
        </article>
      </div>
    </Fragment>
  );
};

export default ItemDetail;
