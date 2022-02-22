import { gql } from "@apollo/client";

export const ADD_PLACE = gql`
  mutation AddPlace($title: String, $file: FileUpload) {
    addPlace(title: $title, image: $file) {
      title,
      file
    }
  }
`;