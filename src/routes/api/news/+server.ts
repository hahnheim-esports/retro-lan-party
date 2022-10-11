import type { RequestHandler } from '@sveltejs/kit';
import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const GET: RequestHandler = async () => {
  try {
    const query = gql`
      query getNews {
        newsEntries(stage: PUBLISHED) {
          title
          copy
          published
          newsImages {
            url
            caption
          }
          newsSlug
        }
      }
    `;
    const { newsEntries } = await client.request(query);
    return new Response(JSON.stringify(newsEntries));
  } catch (error) {
    return new Response(String(error));
  }
};
