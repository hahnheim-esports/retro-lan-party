import { ApolloClient, InMemoryCache, ApolloError, gql } from "@apollo/client/core";
import { s as setContext, h as getContext } from "./index.js";
import { r as readable } from "./index3.js";
const GRAPHQL_ENDPOINT = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl943qogl4l2s01tcf78rcso6/master";
const GRAPHQL_AUTHTOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjU0OTIzMzYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2w5NDNxb2dsNGwyczAxdGNmNzhyY3NvNi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTEwZmU3ZDctNGM3Ny00NThjLWE2NzEtNDFlMTE2YTI1YWNmIiwianRpIjoiY2w5NDc0dnVhNHF1azAxdWxhdHlwMWxsbiJ9.sYrkqFdTrB26MlMb1XTp9UT0EstAuGd0r609qurZxBDAE_o36k7mYkp9jRidMDBndhh55rchj9L0V-b8ba21ZOgoG4Y1l5smxcuVOlcbrPJoKye4dAGbT_hSfptTiH9qr-gJiiJXv3S_3Ns-sIkPDFTj1PCeKBbP-m1ZJjPdcHSC2usexz_FSQiXtEnVBe315x2UcshHN7O4FLCX1cl07fJTjzpk8LgTJkbTl20UqSJbtZ2aCWjBuzNbtkDPGb0dTlhqYR2Rchmw8g78aPOAtJQHjqnzrLty5UHEZ9gpX3QPO-UuUZXhoId8xm-wUWkmnQus7-tPHVSbXGwjep6w2krN5l8ufmVl8GhBY5We2wPvPOMXKsEVLX5plur371BFkrMErcDQ9y97VLZ0cVhfk6Fx5Q6DZv8VsJX0O9csxZ1aNYlbVNJTUk6Je9DZ5oH_pg5ful9_oUmzudqPa477-0FGzstvmlkWJuCPm-QS0VD5mexWCBUFUzZ__nFFrGoR-QoIpvVCVAkwFqX4eOPMiro31IDuzfjKWewMM9kgQ_ryQfr6RTwb9oPDRw9Tk1g7anhctEmHb5vVUFnzkcgzRgJObkD3W0EuhL_yxGT8ykgMNeeWSx6uuBdmHbYARPtiXjaFX1L1QVr_wWT-4x2JquMfpQJyxclksOSEfnj1uVE";
function createApolloClient(authToken) {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    cache: new InMemoryCache()
  });
  return client;
}
const myclient = createApolloClient(GRAPHQL_AUTHTOKEN);
const CLIENT = typeof Symbol !== "undefined" ? Symbol("client") : "@@client";
function getClient() {
  const client = getContext(CLIENT);
  if (!client) {
    throw new Error("ApolloClient has not been set yet, use setClient(new ApolloClient({ ... })) to define it");
  }
  return client;
}
function setClient(client) {
  setContext(CLIENT, client);
}
function observableToReadable(observable, initialValue = {
  loading: true,
  data: void 0,
  error: void 0
}) {
  const store = readable(initialValue, (set) => {
    const skipDuplicate = (initialValue == null ? void 0 : initialValue.data) !== void 0;
    let skipped = false;
    const subscription = observable.subscribe((result) => {
      if (skipDuplicate && !skipped) {
        skipped = true;
        return;
      }
      if (result.errors) {
        const error = new ApolloError({ graphQLErrors: result.errors });
        set({ loading: false, data: void 0, error });
      } else {
        set({ loading: false, data: result.data, error: void 0 });
      }
    }, (error) => set({
      loading: false,
      data: void 0,
      error: error && "message" in error ? error : new Error(error)
    }));
    return () => subscription.unsubscribe();
  });
  return store;
}
const extensions = [
  "fetchMore",
  "getCurrentResult",
  "getLastError",
  "getLastResult",
  "isDifferentFromLastResult",
  "refetch",
  "resetLastResults",
  "resetQueryStoreErrors",
  "result",
  "setOptions",
  "setVariables",
  "startPolling",
  "stopPolling",
  "subscribeToMore",
  "updateQuery"
];
function observableQueryToReadable(query2, initialValue) {
  const store = observableToReadable(query2, initialValue);
  for (const extension of extensions) {
    store[extension] = query2[extension].bind(query2);
  }
  return store;
}
const restoring = typeof WeakSet !== "undefined" ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set();
function query(query2, options = {}) {
  const client = getClient();
  const queryOptions = { ...options, query: query2 };
  let initialValue;
  if (restoring.has(client)) {
    try {
      initialValue = client.readQuery(queryOptions) || void 0;
    } catch (err) {
    }
  }
  const observable = client.watchQuery(queryOptions);
  const store = observableQueryToReadable(observable, initialValue !== void 0 ? {
    data: initialValue
  } : void 0);
  return store;
}
const GET_NEWS = gql`
  query getNews {
    newsEntries(stage: PUBLISHED, orderBy: published_DESC) {
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
const GET_TEAM = gql`
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
const GET_APPOINTMENTS = gql`
  query getAppointments {
    appointments(stage: PUBLISHED) {
      name
      description
      date
      pastEvent
      appointmentsSlug
    }
  }
`;
const GET_CONTENT_IMPRINT = gql`
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
const GET_CONTENT_CONCEPT = gql`
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
const GET_CONTENT_PRIVACY = gql`
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
export {
  GET_CONTENT_PRIVACY as G,
  GET_CONTENT_IMPRINT as a,
  GET_CONTENT_CONCEPT as b,
  GET_NEWS as c,
  GET_TEAM as d,
  GET_APPOINTMENTS as e,
  myclient as m,
  query as q,
  setClient as s
};
