import React, { Fragment, useState } from 'react'

const MyStyle = (props) => {
  const [FLG, setFLG] = useState(false)
  const click_trigger = () => {
    setFLG(!FLG)
  }

  return (
    <Fragment>
      <h1 className="my-1">MyStyle</h1>
      <h1
        className="my-1"
        style={{
          color: FLG ? 'red' : 'blue',
          backgroundColor: FLG ? 'yellow' : 'gray',
        }}
      >
        MyStyle
      </h1>
      <hr />
      FLG: {FLG + ''}
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={click_trigger}
      >
        切換樣式
      </button>
    </Fragment>
  )
}

export default MyStyle
