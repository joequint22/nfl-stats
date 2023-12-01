
import { useEffect, useState } from 'react'
import './App.css'
import UserInput from './components/userInput'
import { ResultRow } from './components/ResultRow'

function App() {
  const [userInput, setUserInput] = useState('')
  const [cachedResults, setCachedResults] = useState([])

  useEffect(() => {
    async function fetchCachedResults(){
      try{
       const res = await fetch("https://ambeigj4hx.us.aircode.run/cachedValues")
       if(!res.ok){
         throw new Response('Non 200 HTTP Status', res)
       }
       const data = await res.json()
       setCachedResults(data)
      }catch(err: any){
        switch (err?.response.status){
          case 400: break;
          case 401: break;
          case 404: break;
          case 500: break;
        }
        handle(err)
        throw(err)
      }
      return() => {

      }

    }

    fetchCachedResults();


  }, [])
  console.log(cachedResults)
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
function handle(err: any) {
  throw new Error('Function not implemented.')
}

