import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
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
