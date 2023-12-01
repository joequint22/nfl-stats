import { useState } from "react";
import { Stats } from "./Stats";

type TcachedValues = {
  [keys: string]: object | string;
};

export const ResultRow = ({
    cachedResults, userInput
}: TcachedValues) => {
  const [statsOpen, setStatsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

//   function searchCachedResults(userInput: string): <TcachedValues> {
//     if(userInput.toLowerCase() =)
//   }




  return (
    <div className="border relative overflow-hidden rounded-md border-white/30 px-4 py-2">
      <div
        className=" h-8 flex justify-between"
        onClick={() => {
          setStatsOpen(!statsOpen);
        }}
      >
        {isLoading ? (
          ""
        ) : (
          <>
            <div>Name</div>
            <div>Team</div>
            <div>Status</div>
          </>
        )}
      </div>
      {isLoading && (
        <div className="skeleton-animation inset-0 bg-gradient-to-r from-transparent via-red-900 to-transparent absolute"></div>
      )}
      {!isLoading && statsOpen && <Stats />}
    </div>
  );
};
