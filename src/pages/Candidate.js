import React from 'react'

const Candidate = () => {
  return (
    <div className="bg-white pt-12">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Candidate</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="rounded shadow-lg p-4">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-circle text-4xl text-blue-500 mr-4"></i>
            <h2 className="text-2xl font-bold">Dipak Sah</h2>
          </div>
          <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/437926519_1528671534360715_3707691206217530104_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BHpBlhBWc4kQ7kNvgHoKEgZ&_nc_ht=scontent.fktm8-1.fna&_nc_gid=ArF1m4Gjrkju1G_01lpv0TR&oh=00_AYD8aXsGygkno955F3rcfSqpAUbRalH3M4xZCrXLnmNg3A&oe=66E87CE3" alt="Dipak Sah" className="h-20 w-20 rounded-full mx-auto mb-4" />
          <div className="flex items-center justify-center text-6xl font-bold">Goals</div>
          <ul className="list-disc pl-8 my-4">
            <li>Developing plans
            </li>
            <li>Implementing strategies</li>
            <li>Executing the project to completione</li>
            <li>Accomplishing business plans</li>
            <li>Outlining the project's concrete deliverables</li>
            <li>24/7 support</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Vote Now
          </button>
        </div>
        <div className="rounded shadow-lg p-4">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-circle text-4xl text-yellow-500 mr-4"></i>
            <h2 className="text-2xl font-bold">Bobim Khanal</h2>
          </div>
          <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/153791506_1055770051556594_52003160759777893_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=IeztuZy9em0Q7kNvgEQhqgK&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AbTimlIZbkrF23IX9b3WIUw&oh=00_AYCIHvAJ3ETRtyuAYgCO5vlsEKbYNKM1pmtASFSS8TPxSA&oe=670A1757" alt="Dipak Sah" className="h-20 w-20 rounded-full mx-auto mb-4" />

          <div className="flex items-center justify-center text-6xl font-bold">Goals</div>
          <ul className="list-disc pl-8 my-4">
            <li>Developing plans</li>
            <li>Implementing strategies</li>
            <li>Executing the project to completion</li>
            <li>Accomplishing business plans</li>
            <li>Outlining the project's concrete deliverables</li>
            <li>24/7 support</li>
          </ul>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full">
            Vote Now
          </button>
        </div>
        <div className="rounded shadow-lg p-4">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-circle text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-2xl font-bold">Avishek sah</h2>
          </div>
          <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/331117262_3289655521334816_6394448455755468430_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=IMPKDcPLfr4Q7kNvgG-Kl7m&_nc_ht=scontent.fktm8-1.fna&_nc_gid=A3xYAwQHA4humW5TK6CEp4y&oh=00_AYBIn0h54msu4da2l7RbVsVrS-93k30biHg-yGXh_yeObg&oe=66E8892A" alt="Dipak Sah" className="h-20 w-20 rounded-full mx-auto mb-4" />

          <div className="flex items-center justify-center text-6xl font-bold">Goals</div>
          <ul className="list-disc pl-8 my-4">
            <li>Developing plans</li>
             <li>Implementing strategies</li>
             <li>Executing the project to completion</li>
              <li>Accomplishing business plans </li>
            <li>Outlining the project's concrete deliverables </li>
            <li>24/7 support</li>
          </ul>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
            Vote Now
          </button>
        </div>
      </div>
    </div>
  </div>
   )
}

export default Candidate
