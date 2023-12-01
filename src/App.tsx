
import { useEffect, useState } from 'react'
import './App.css'
import UserInput from './components/userInput'
import { ResultRow } from './components/ResultRow'
import axios from 'axios'

function App() {
  const [userInput, setUserInput] = useState('')
  const [cachedResults, setCachedResults] = useState([])

  useEffect(() => {
       axios.get('https://ambeigj4hx.us.aircode.run/cachedValues')
        .then(res => {
          return setCachedResults(res.data)
        })
    
  })
  return (
    <>
      <div className='h-screen text-white bg-gradient-radial from-[#2e4363] via-[#1e3258] to-[#111c33]'>
        <main className='mx-auto px-4 py-8 max-w-2xl'>
          <h1 className='font-bold text-6xl text-center'>NFL STAT TRACKER</h1>
          <div className='flex justify-center mt-8'>
            <UserInput className="" value={userInput} onChange={e => setUserInput(e.target.value)}/>
          </div>
          <div className='mt-8'>
            <ResultRow results={cachedResults} userInput={userInput}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
