import { c as client } from "../../../../chunks/graphql-client.js";
import { gql } from "graphql-request";
const GET = async () => {
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
export {
  GET
};
