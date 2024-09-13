import React from 'react'

export const Contactus = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="w-1/2 px-6 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Contact Us</h2>
        <form className="mt-6" action="#" method="POST">
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
            <input type="email" id="email" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-600" placeholder="name@company.com" required />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-600" placeholder="Let us know how we can help you" required />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
            <textarea id="message" rows="4" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-600" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600">
            Send Message
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:underline">info@company.com</a>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:underline">212-456-7890</a>
        </p>
      </div>
    </div>
  )
}
export default Contactus;
