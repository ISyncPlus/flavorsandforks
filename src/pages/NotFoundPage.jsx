import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div className='max-w-5xl min-h-screen mx-auto my-auto'>
    <section className='p-20 text-center'>
        <FaExclamationTriangle className="text-[5em] text-red-500 mx-auto -mb-10"/>
        <h3 className='text-[10em] text-black'>
            404
        </h3>
        <p className="mb-5 font-bold text-xl font-vesper -mt-5">
            Page not found
        </p>
        <Link to="/" className='bg-orange-400 p-1 rounded-xl py-3 px-5 text-white hover:bg-orange-500'>Return To HomePage</Link>
      </section>
    </div>
  )
}

export default NotFoundPage
