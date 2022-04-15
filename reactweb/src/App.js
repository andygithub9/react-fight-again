import React, { useState } from 'react'
import Header from './components/Header'
// import ItemDetail from './components/itemDetail'
// import ItemDetailUseProp from './components/itemDetailUseProp'
// import AwsForm from './components/AwsForm'
// import MyStyle from './components/MyStyle'
// import MyClass from './components/MyClass'
import AwsFormUseRef from './components/AwsFormUseRef'

function App() {
  // const itemData = {
  //   link: 'https://codepen.io/codetimeio/pen/RYMEJe',
  //   image: 'https://picsum.photos/600/400/?random',
  //   article: 'Article Title from parent element pass prop to child element.',
  //   date: '11/1/19',
  // }

  // const dataList = [
  //   {
  //     link: 'https://codepen.io/codetimeio/pen/RYMEJe',
  //     image: 'https://picsum.photos/600/400/?random',
  //     article: 'Title from dataList prop.',
  //     date: '11/1/19',
  //   },
  //   {
  //     link: 'https://codepen.io/codetimeio/pen/RYMEJe',
  //     image: 'https://picsum.photos/600/400/?random',
  //     article: 'Title from dataList prop.',
  //     date: '11/1/19',
  //   },
  // ]

  // 通過 Array.map 方法遍歷 dataList 數組中的元素，並將元素中的內容通過 prop 傳入到 ItemDetailUseProp 子組件，
  // 再將所有子組件返回賦值給 listItem
  // const listItem = dataList.map((ele, index) => {
  //   return (
  //     <ItemDetailUseProp
  //       key={index}
  //       link={ele.link}
  //       image={ele.image}
  //       article={ele.article + ' Index: ' + index}
  //       date={ele.date}
  //     ></ItemDetailUseProp>
  //   )
  // })

  // const AwsFormData = {
  //   accessKeyID: 'asdfg',
  //   secretAccessKey: '12345',
  //   regionID: 'ap-northeast-1',
  // }

  // const [msg, setMsg] = useState('hello msg')

  // 傳到子組件的函數
  // const awsFormHandler = async (formData) => {
  //   const postData = JSON.stringify({
  //     accessKeyID: formData.accessKeyID,
  //     secretAccessKey: formData.secretAccessKey,
  //     regionID: formData.regionID,
  //   })

  //   const res = await fetch('http://127.0.0.1:8888/login', {
  //     method: 'POST',
  //     body: postData,
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   })

  //   const resData = await res.json()
  //   // JSON.stringify() 的格式化輸出
  //   // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_space_argument
  //   setMsg(JSON.stringify(resData.body, null, '\t'))
  //   console.log(resData)
  // }

  return (
    <div>
      <Header></Header>
      {/* tailwind rwd 的寫法 https://tailwindcss.com/docs/responsive-design */}
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* 引用子組件 */}
          {/* <ItemDetail></ItemDetail> */}

          {/* 引用子組件並傳遞 props 到子組件中 */}
          {/* <ItemDetailUseProp
            link={itemData.link}
            image={itemData.image}
            article={itemData.article}
            date={itemData.date}
          ></ItemDetailUseProp> */}

          {/* 遍歷 dataList 數組中元素內容返回的子組件 */}
          {/* {listItem} */}

          {/* 通過 myEvent props 將 awsFormHandler 函數傳入到子組件 */}
          {/* <AwsForm AwsFormData={AwsFormData} myEvent={awsFormHandler}></AwsForm> */}
        </div>
        {/* <pre className="w-full max-w-md mx-auto">{msg}</pre> */}

        {/* 動態 style */}
        {/* <MyStyle></MyStyle> */}

        {/* 動態 class */}
        {/* <MyClass></MyClass> */}

        {/* 使用 Ref 綁定元素 */}
        <AwsFormUseRef></AwsFormUseRef>
      </div>
    </div>
  )
}

export default App
