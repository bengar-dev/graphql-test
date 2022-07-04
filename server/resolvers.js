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
    }
}