import { useState, useEffect } from 'react'
import JobList from './JobList';
import { getJobs } from '../graphql/queries'
function JobBoard() {

  const [job, setJobs] = useState([])

  useEffect(() => {
    getJobs().then(setJobs)
    console.log(job)
  }, [])

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={job} />
    </div>
  );
}

export default JobBoard;
