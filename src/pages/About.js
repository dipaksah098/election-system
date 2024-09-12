import React from 'react'

const About = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:h-screen lg:items-center lg:justify-center md:px-8 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img className="object-cover w-full h-full rounded-lg shadow-lg" src="https://www.chinadaily.com.cn/world/images/attachement/jpg/site1/20080410/0013729e45180967d17c06.jpg" alt="About us" />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Flowbite is an open-source library of UI components based on the Utility-First
              philosophy. It's designed to be modular and highly customizable to fit your
              needs. It's built on top of Tailwind CSS and it's fully compatible with the
              latest version of the framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


