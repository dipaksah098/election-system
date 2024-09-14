import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Candidate = () => {

  const [candidates, setCandidates] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('api/candidate')
      .then(res => setCandidates(res.data))
      .catch(err => {
        console.log(err)
        setError(err.message)
      })
  }, [])

  return (
    <div className="bg-white pt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Candidate</h1>
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {candidates.map(candidate => (
            <div key={candidate.id} className="rounded shadow-lg p-4"> {/* Added key */}
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-circle text-4xl text-blue-500 mr-4"></i>
                <h2 className="text-2xl font-bold">{candidate.name}</h2>
              </div>
              <img src={candidate.image} alt={candidate.name} className="h-20 w-20 rounded-full mx-auto mb-4" />
              <div className="flex items-center justify-center text-6xl font-bold">Goals</div>
              <ul className="list-disc pl-8 my-4">
                <li>{candidate.goals}</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Vote Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
   )
}

export default Candidate

