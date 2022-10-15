import { json, error } from '@sveltejs/kit';
import { gql } from 'graphql-request';
import { client } from '$lib/graphql-client';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
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
}
