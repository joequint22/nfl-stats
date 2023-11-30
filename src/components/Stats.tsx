import WeeklyStatsRow from './WeeklyStatsRow'

export const Stats = () => {
    //map through data 
  return (
    <div className='py-5'>
        <table className='w-full text-left'>
            <thead className=''>
                <th>WEEK</th>
                <th>OPP</th>
                <th>REC</th>
                <th>YDS</th>
                <th>TD</th>
                <th>TAR</th>
                <th>CAR</th>
                <th>YDS</th>
                <th>TD</th>
            </thead>
                <WeeklyStatsRow/>
                <WeeklyStatsRow/>
                <WeeklyStatsRow/>
                <WeeklyStatsRow/>
                <WeeklyStatsRow/>
                <WeeklyStatsRow/>
        </table>
    </div>
  )
}
