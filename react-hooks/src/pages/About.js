import React, { useContext } from 'react'

import { AboutContentContext } from '../App'

const About = () => {
  const AboutContent = useContext(AboutContentContext)
  console.log('AboutContent: ', AboutContent)
  return (
    <React.Fragment>
      <h1>About</h1>
      <hr />
      <h2>text: {AboutContent.text}</h2>
      <h3>author: {AboutContent.author}</h3>
      <button
        onClick={() =>
          AboutContent.sayHello('我是 AboutContext 中的 sayHello 方法')
        }
      >
        觸發 AboutContentContext 的 sayHello 方法
      </button>
    </React.Fragment>
  )
}
export default About
