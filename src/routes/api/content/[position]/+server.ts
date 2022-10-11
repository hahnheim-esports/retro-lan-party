import type { RequestHandler } from '@sveltejs/kit';
import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const GET: RequestHandler = async (req) => {
  const position = req.params.position;

  try {
    const query = gql`
      query getContentSnippets($position: String!) {
        contentSnippets(where: { position: $position }, stage: PUBLISHED) {
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

    const variables = { position };
    const { contentSnippets } = await client.request(query, variables);

    return new Response(JSON.stringify(contentSnippets));
  } catch (error) {
    return new Response(String(error));
  }
};
