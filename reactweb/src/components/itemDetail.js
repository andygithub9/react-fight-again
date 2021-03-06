// Fragment 類似於 div 元素，它的用處是最外層不用不需要用 div 包起來，多個 Fragment 可以在結構的同一層
import React, { Fragment } from "react";

const ItemDetail = () => {
  const ItemHref = "https://codepen.io/codetimeio/pen/RYMEJe";
  const ItemImgSrc = "https://picsum.photos/600/400/?random";
  const ItemArticleTitle = "Article Title123";
  const ItemDate = "11/1/19";

  return (
    <Fragment>
      {/* 注意: jsx 元素中不能寫 class 要寫 className */}
      {/* tailwind rwd 的寫法 https://tailwindcss.com/docs/responsive-design */}
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <a href={ItemHref}>
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={ItemImgSrc}
            />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a
                className="no-underline hover:underline text-black"
                href={ItemHref}
              >
                {ItemArticleTitle}
              </a>
            </h1>
            <p className="text-grey-darker text-sm">{ItemDate}</p>
          </header>
        </article>
      </div>
    </Fragment>
  );
};

export default ItemDetail;
