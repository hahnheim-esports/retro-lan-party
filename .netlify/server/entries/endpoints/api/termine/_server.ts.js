import { c as client } from "../../../../chunks/graphql-client.js";
import { gql } from "graphql-request";
const GET = async () => {
  try {
    const query = gql`
      query getAppointments {
        appointments(stage: PUBLISHED) {
          name
          description
          date
          appointmentsSlug
        }
      }
    `;
    const { appointments } = await client.request(query);
    return new Response(JSON.stringify(appointments));
  } catch (error) {
    return new Response(String(error));
  }
};
export {
  GET
};
