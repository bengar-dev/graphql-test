import { useState, useEffect } from 'react'
import JobList from './JobList';
import { getJobs } from '../graphql/queries'
function JobBoard() {

  const [job, setJobs] = useState([])
  const [msg, setMsg] = useState("")
  const [error, setError] = useState(false)
  useEffect(() => {
    getJobs()
      .then(setJobs)
      .catch(err => {
        setError(true)
        setMsg(String(err))
      })
  }, [])

  if(error) {
    return <p>Sorry something went wrong: {msg.split('TypeError:')}</p>
  }

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
