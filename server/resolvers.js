import { Job, Company } from './db.js'

export const resolvers = {
    Query: {
        company: (root, {id}) => {
            return Company.findById(id)
        },
        job: (root, { id }) => {
            return Job.findById(id)
        },
        jobs: () => Job.findAll()
    },
    Job: {
        company: async (job) => {
            const findCompany = await Company.findById(job.companyId)
            return findCompany
        }
    },
    Company: {
        jobs: async(company) => {
            const findJobs = await Job.findAll((job) => job.companyId === company.id)
            return findJobs
        }
    }
}