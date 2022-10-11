import type { RequestHandler } from '@sveltejs/kit';
import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const GET: RequestHandler = async () => {
  try {
    const query = gql`
      query getContentSnippets {
        contentSnippets(stage: PUBLISHED) {
          name
          headline
          content
          contentImages {
            url
            caption
          }
          position
          contentSlug
        }
      }
    `;
    const { contentSnippets } = await client.request(query);
    return new Response(JSON.stringify(contentSnippets));
  } catch (error) {
    return new Response(String(error));
  }
};
