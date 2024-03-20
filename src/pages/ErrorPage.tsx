import React from 'react'

const ErrorPage:React.FC = () => {
  return (
    <div className='text-center'>
        <h1 className='text-4xl text-red-500'>Error 404</h1>
        <h1 className='text-2xl'>This page does not exist</h1>
    </div>
   
  )
}

export default ErrorPage