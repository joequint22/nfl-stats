import { useState } from "react";
import { Stats } from "./Stats";



export const ResultRow = ({
    results, userInput
}) => {

    
    
    return (
        <div className="border relative overflow-hidden rounded-md border-white/30 px-4 py-2">
            {/* {results.map((team: string, key: string) => {
               return (
                <div key={key}>
                    <h1>${team}</h1>
                </div>
               )
            })} */}
   
        </div>
  );
};

















//   const [statsOpen, setStatsOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
{/* <div
  className=" h-8 flex justify-between"
  onClick={() => {
    setStatsOpen(!statsOpen);
  }}
>
  {isLoading ? (
    ""
  ) : (
    <>
      <div>name</div>
      <div>Team</div>
      <div>Status</div>
    </>
  )}
</div>
{isLoading && (
  <div className="skeleton-animation inset-0 bg-gradient-to-r from-transparent via-red-900 to-transparent absolute"></div>
)}
{!isLoading && statsOpen && <Stats />} */}