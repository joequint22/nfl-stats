import { useState } from "react"
import { Stats } from './Stats'

export const ResultRow = () => {
    const [statsOpen, setStatsOpen] = useState(false)
  return (
    <div className="border rounded-md border-white/30 px-4 py-2">
    <div 
    className="flex justify-between"
    onClick={() => {setStatsOpen(!statsOpen)}}>
       <div>Name</div>
       <div>Team</div>
       <div>Status</div>
    </div>
        {statsOpen && 
            <Stats />
        }   
    </div>
  )
}
