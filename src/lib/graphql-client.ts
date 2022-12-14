import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const GRAPHQL_ENDPOINT = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl943qogl4l2s01tcf78rcso6/master';
const GRAPHQL_AUTHTOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjU0OTIzMzYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2w5NDNxb2dsNGwyczAxdGNmNzhyY3NvNi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTEwZmU3ZDctNGM3Ny00NThjLWE2NzEtNDFlMTE2YTI1YWNmIiwianRpIjoiY2w5NDc0dnVhNHF1azAxdWxhdHlwMWxsbiJ9.sYrkqFdTrB26MlMb1XTp9UT0EstAuGd0r609qurZxBDAE_o36k7mYkp9jRidMDBndhh55rchj9L0V-b8ba21ZOgoG4Y1l5smxcuVOlcbrPJoKye4dAGbT_hSfptTiH9qr-gJiiJXv3S_3Ns-sIkPDFTj1PCeKBbP-m1ZJjPdcHSC2usexz_FSQiXtEnVBe315x2UcshHN7O4FLCX1cl07fJTjzpk8LgTJkbTl20UqSJbtZ2aCWjBuzNbtkDPGb0dTlhqYR2Rchmw8g78aPOAtJQHjqnzrLty5UHEZ9gpX3QPO-UuUZXhoId8xm-wUWkmnQus7-tPHVSbXGwjep6w2krN5l8ufmVl8GhBY5We2wPvPOMXKsEVLX5plur371BFkrMErcDQ9y97VLZ0cVhfk6Fx5Q6DZv8VsJX0O9csxZ1aNYlbVNJTUk6Je9DZ5oH_pg5ful9_oUmzudqPa477-0FGzstvmlkWJuCPm-QS0VD5mexWCBUFUzZ__nFFrGoR-QoIpvVCVAkwFqX4eOPMiro31IDuzfjKWewMM9kgQ_ryQfr6RTwb9oPDRw9Tk1g7anhctEmHb5vVUFnzkcgzRgJObkD3W0EuhL_yxGT8ykgMNeeWSx6uuBdmHbYARPtiXjaFX1L1QVr_wWT-4x2JquMfpQJyxclksOSEfnj1uVE';

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

export const myclient = createApolloClient(GRAPHQL_AUTHTOKEN);
