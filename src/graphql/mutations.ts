/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
export const createUserToLesson = /* GraphQL */ `
  mutation CreateUserToLesson(
    $input: CreateUserToLessonInput!
    $condition: ModelUserToLessonConditionInput
  ) {
    createUserToLesson(input: $input, condition: $condition) {
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
export const updateUserToLesson = /* GraphQL */ `
  mutation UpdateUserToLesson(
    $input: UpdateUserToLessonInput!
    $condition: ModelUserToLessonConditionInput
  ) {
    updateUserToLesson(input: $input, condition: $condition) {
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
export const deleteUserToLesson = /* GraphQL */ `
  mutation DeleteUserToLesson(
    $input: DeleteUserToLessonInput!
    $condition: ModelUserToLessonConditionInput
  ) {
    deleteUserToLesson(input: $input, condition: $condition) {
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
