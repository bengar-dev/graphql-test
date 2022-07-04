import { request, gql } from "graphql-request";

const GRAPHQL_URL = "http://localhost:9000/graphql";

export const getJobs = async () => {
  const query = gql`
    query {
      jobs {
        id
        title
        company {
          id
          name
        }
        description
      }
    }
  `;

  const { jobs } = await request(GRAPHQL_URL, query)
    return jobs
};


export const getJob = async (id) => {
  const query = gql`
    query JobQuery($id: ID!) {
      job(id: $id) {
        id
        title
        company {
          id
          name
        }
        description
      }
    }
  `
  const variable = {id}
  const { job } = await request(GRAPHQL_URL, query, variable)
  return job
}

export const getCompany = async (id) => {
  const query = gql`
    query CompanyQuery($id: ID!) {
      company(id: $id) {
        name
        description
        jobs {
          id
          title
        }
      }
    }
  `

  const variables = {id}
  const { company } = await request(GRAPHQL_URL, query, variables)
  return company
}

export const createJob = async (title, companyId, description) => {
  const mutation = gql`
    mutation CreateJobMutation($title: String!, $companyId: ID!, $description: String) {
      createJob(
        title: $title,
        companyId: $companyId,
        description: $description
      ) {
        id
        title
        company {
          id
          name
        }
      }
    }
  `

  const variables = {title, companyId, description}
  const { newJob } = await request(GRAPHQL_URL, mutation, variables)
  return newJob
}

export const deleteJob = async (id) => {

  const mutation = gql`
    mutation deleteJob($id: ID!) {
      deleteJob(id: $id)
    }
  `

  const variable = { id }
  const deleteJob = await request(GRAPHQL_URL, mutation, variable)
  return deleteJob
}