import { Job, Company } from './db.js'

export const resolvers = {
    Query: {
        jobs: () => Job.findAll()
    },
    Job: {
        company: async (job) => {
            const findCompany = await Company.findById(job.companyId)
            return findCompany
        }
    }
}