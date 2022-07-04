import { Link } from 'react-router-dom';
import {deleteJob} from '../graphql/queries'

function JobItem({ job, companyUser }) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  
  const handleDelete = (event) => {
    event.preventDefault()
    deleteJob(job.id).then(res => console.log(res))
  }

  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>
          {title}
        </Link>
        {companyUser === job.company.id && (
          <button
          onClick={(e) => handleDelete(e)}>Delete</button>
        )}
      </div>
    </li>
  );
}

function JobList({ jobs }) {
  const companyUser = localStorage.getItem('company')
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} companyUser={companyUser}/>
      ))}
    </ul>
  );
}

export default JobList;
