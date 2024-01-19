/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
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
export const onCreateUserToModel = /* GraphQL */ `
  subscription OnCreateUserToModel(
    $filter: ModelSubscriptionUserToModelFilterInput
  ) {
    onCreateUserToModel(filter: $filter) {
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
export const onUpdateUserToModel = /* GraphQL */ `
  subscription OnUpdateUserToModel(
    $filter: ModelSubscriptionUserToModelFilterInput
  ) {
    onUpdateUserToModel(filter: $filter) {
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
export const onDeleteUserToModel = /* GraphQL */ `
  subscription OnDeleteUserToModel(
    $filter: ModelSubscriptionUserToModelFilterInput
  ) {
    onDeleteUserToModel(filter: $filter) {
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
