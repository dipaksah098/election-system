import React from 'react'

const pricing = () => {
  return (
    <div className="bg-white pt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded shadow-lg p-4">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-circle text-4xl text-blue-500 mr-4"></i>
              <h2 className="text-2xl font-bold">SILVER</h2>
            </div>
            <div className="flex items-center justify-center text-6xl font-bold">$5</div>
            <ul className="list-disc pl-8 my-4">
              <li>1 Website Host</li>
              <li>Lifetime access</li>
              <li>Unlimited Storage</li>
              <li>Unlimited Email Id</li>
              <li>Unlimited Database</li>
              <li>24/7 support</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Buy Now
            </button>
          </div>
          <div className="rounded shadow-lg p-4">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-circle text-4xl text-yellow-500 mr-4"></i>
              <h2 className="text-2xl font-bold">GOLD</h2>
            </div>
            <div className="flex items-center justify-center text-6xl font-bold">$15</div>
            <ul className="list-disc pl-8 my-4">
              <li>10 Website Host</li>
              <li>Lifetime access</li>
              <li>Unlimited Storage</li>
              <li>Unlimited Email Id</li>
              <li>Unlimited Database</li>
              <li>24/7 support</li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full">
              Buy Now
            </button>
          </div>
          <div className="rounded shadow-lg p-4">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-circle text-4xl text-purple-500 mr-4"></i>
              <h2 className="text-2xl font-bold">PLATINUM</h2>
            </div>
            <div className="flex items-center justify-center text-6xl font-bold">$25</div>
            <ul className="list-disc pl-8 my-4">
              <li>30 Website Host</li>
              <li>Lifetime access</li>
              <li>Unlimited Storage</li>
              <li>Unlimited Email Id</li>
              <li>Unlimited Database</li>
              <li>24/7 support</li>
            </ul>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pricing
