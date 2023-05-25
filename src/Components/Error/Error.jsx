import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import error404 from "../../assets/43391-404-error-page-not-found-confused-robot.json";
import Lottie from "lottie-react";

const Error = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen md:p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <Lottie className='md:h-96' animationData={error404} loop={true} />
        <div className='max-w-md text-center'>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='md:px-8 px-2 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Error