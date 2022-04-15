import React from 'react'
import { useParams } from 'react-router-dom'

const PageNewsDetail = () => {
  const routeParams = useParams()
  return (
    <div className="w-full max-w-md mx-auto">
      <h1>PageNewsDetail</h1>
      <h2>id: {routeParams.id}</h2>
      <hr />
      <pre>{JSON.stringify(routeParams, null, '\t')}</pre>
    </div>
  )
}

export default PageNewsDetail
