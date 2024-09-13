import React from 'react'

const Service = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <a href="#" className="flex items-center mb-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Voter Registration</h5>
          </a>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Managing and maintaining accurate voter rolls, ensuring that eligible citizens are registered to vote, and facilitating updates to voter information.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
        <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <a href="#" className="flex items-center mb-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Election Planning and Administration</h5>
          </a>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Organizing and overseeing the logistics of elections, including setting election dates, managing polling stations, and ensuring the availability of necessary resources.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
        <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <a href="#" className="flex items-center mb-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Candidate Registration and Nomination</h5>
          </a>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Processing the registration of candidates, verifying their eligibility, and managing the nomination process for various positions.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Service

