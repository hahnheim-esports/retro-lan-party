import { c as client } from "../../../../chunks/graphql-client.js";
import { gql } from "graphql-request";
const GET = async () => {
  try {
    const query = gql`
      query getTeam {
        teamMembers(stage: PUBLISHED) {
          name
          description
          image {
            url
            caption
          }
          teamSlug
        }
      }
    `;
    const { teamMembers } = await client.request(query);
    return new Response(JSON.stringify(teamMembers));
  } catch (error) {
    return new Response(String(error));
  }
};
export {
  GET
};
