
import { useState } from 'react'
import './App.css'
import UserInput from './components/userInput'
import { ResultRow } from './components/ResultRow'

function App() {
  const [userInput, setUserInput] = useState('')

  return (
    <>
      <div className='h-screen text-white bg-gradient-radial from-[#2e4363] via-[#1e3258] to-[#111c33]'>
        <main className='mx-auto px-4 py-8 max-w-2xl'>
          <h1 className='font-bold text-6xl text-center'>NFL STAT TRACKER</h1>
          <div className='flex justify-center mt-8'>
            <UserInput className="" value={userInput} onChange={e => setUserInput(e.target.value)}/>
          </div>
          <div className='mt-8'>
            <ResultRow />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
