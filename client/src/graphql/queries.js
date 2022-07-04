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
