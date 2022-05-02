import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation SignUp($registerInput: RegisterInput) {
    signUp(registerInput: $registerInput) {
      token
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

export const NEW_NOTE = gql`
  mutation CreateNote($content: String!) {
    createNote(content: $content) {
      id
    }
  }
`;

export const EDIT_NOTE = gql`
  mutation UpdateNote($noteId: ID!, $content: String!) {
    updateNote(id: $noteId, content: $content) {
      id
      content
      createdAt
      updatedAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote($noteId: ID!) {
    deleteNote(id: $noteId)
  }
`;

export const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($noteId: ID!) {
    toggleFavorite(id: $noteId) {
      id
      favoriteCount
    }
  }
`;
