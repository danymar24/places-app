import { gql } from "@apollo/client";

export const ADD_PLACE = gql`
  mutation AddPlace($title: String) {
    addPlace(title: $title) {
      title
    }
  }
`;