import React, { Fragment, useState } from 'react'

const MyClass = (props) => {
  const [FLG, setFLG] = useState(false)
  const click_trigger = () => {
    setFLG(!FLG)
  }

  return (
    <Fragment>
      <h1 className="my-1">MyClass</h1>
      <h1
        className={`${
          FLG ? 'text-neutral-50 bg-black' : 'text-red-700 bg-zinc-400'
        } my-1`}
      >
        MyClass
      </h1>
      <hr />
      FLG: {FLG + ''}
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={click_trigger}
      >
        切換class
      </button>
    </Fragment>
  )
}

export default MyClass
