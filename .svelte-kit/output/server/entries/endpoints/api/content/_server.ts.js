import { c as client } from "../../../../chunks/graphql-client.js";
import { gql } from "graphql-request";
const GET = async () => {
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
export {
  GET
};
