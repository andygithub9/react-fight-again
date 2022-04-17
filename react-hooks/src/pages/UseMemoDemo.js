import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {
  console.log('---app is running---')

  const [FLG1, setFLG1] = useState(false)
  const [FLG2, setFLG2] = useState(false)

  // 每次渲染都會執行
  const forLoop1 = () => {
    console.log('forLoop1 is runnung')
    let result = 0
    for (let i = 0; i <= 100; i++) {
      result += i
    }
    return result
  }

  // https://zh-hant.reactjs.org/docs/hooks-reference.html#usememo
  // useMemo() 會回傳一個 memoized 的值，將第一個回調函數參數緩存起來，
  // 當頁面重新渲染時不會重新調用第一個回調函數參數，而是使用緩存的 memoized
  const forLoop2 = useMemo(() => {
    console.log('forLoop2 is runnung')
    let result = 0
    for (let i = 0; i <= 100; i++) {
      result += i
    }
    return result
  }, [])

  return (
    <React.Fragment>
      <h2>
        按下改變 FLG1 會執行 forLoop1() 不會執行 forLoop2 ，因為 forLoop2
        的值已經被 useMemo() 緩存起來了
      </h2>
      <div>
        FLG1: {`${FLG1}`}, FLG2: {`${FLG2}`}
      </div>
      <hr />
      <div>
        <button onClick={() => setFLG1(!FLG1)}>改變 FLG1</button>
        <button onClick={() => setFLG2(!FLG2)}>改變 FLG2</button>
      </div>
      <hr />
      <h3>forLoop1: {`${forLoop1()}`}</h3>
      <h3>forLoop2: {`${forLoop2}`}</h3>
    </React.Fragment>
  )
}

export default UseMemoDemo
