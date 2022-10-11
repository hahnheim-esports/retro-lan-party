import type { RequestHandler } from '@sveltejs/kit';
import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const GET: RequestHandler = async () => {
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
