/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      UserName
      Email
      PasswordHash
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        UserName
        Email
        PasswordHash
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      UserID
      Title
      Description
      FilePath
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        UserID
        Title
        Description
        FilePath
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserToLesson = /* GraphQL */ `
  query GetUserToLesson($id: ID!) {
    getUserToLesson(id: $id) {
      UserID
      LessonID
      AccessEnabled
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserToLessons = /* GraphQL */ `
  query ListUserToLessons(
    $filter: ModelUserToLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserToLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        UserID
        LessonID
        AccessEnabled
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
