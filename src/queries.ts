import { gql } from '@apollo/client/core';

export const GET_NEWS = gql`
  query getNews {
    newsEntries(stage: PUBLISHED, orderBy: published_DESC, first: 50) {
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

export const GET_TEAM = gql`
  query getTeam {
    teamMembers(stage: PUBLISHED, orderBy: orderPosition_ASC, first: 50) {
      name
      description
      image {
        url
        caption
      }
      orderPosition
      teamSlug
    }
  }
`;

export const GET_APPOINTMENTS = gql`
  query getAppointments {
    appointments(stage: PUBLISHED, first: 50) {
      name
      description
      date
      pastEvent
      appointmentsSlug
    }
  }
`;

export const GET_CONTENT_IMPRINT = gql`
  query getContentSnippets {
    contentSnippets(where: { position: "impressum" }, stage: PUBLISHED) {
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

export const GET_CONTENT_CONCEPT = gql`
  query getContentSnippets {
    contentSnippets(where: { position: "konzept" }, stage: PUBLISHED) {
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

export const GET_CONTENT_PRIVACY = gql`
  query getContentSnippets {
    contentSnippets(where: { position: "datenschutz" }, stage: PUBLISHED) {
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
