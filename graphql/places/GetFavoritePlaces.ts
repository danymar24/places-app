import { gql } from "@apollo/client";

export const GET_FAVORITE_PLACES = gql`
  query GetFavoritePlaces {
    favoritePlaces {
      title
      id
    }
  }
`;