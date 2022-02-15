import { gql } from "@apollo/client";

export const GET_PLACE = gql`
  query Place($placeId: String) {
    place(id: $placeId) {
      title
      id
    }
  }
`;