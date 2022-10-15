import { json } from '@sveltejs/kit';
import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
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

    console.log(...event.request.headers);

    return json({
      appointments
    });
  } catch (error) {
    return new Response(String(error));
  }
}
