import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName: string;
  readonly Email: string;
  readonly PasswordHash: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName: string;
  readonly Email: string;
  readonly PasswordHash: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerLesson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserID: string;
  readonly Title: string;
  readonly Description: string;
  readonly FilePath: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLesson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserID: string;
  readonly Title: string;
  readonly Description: string;
  readonly FilePath: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Lesson = LazyLoading extends LazyLoadingDisabled ? EagerLesson : LazyLesson

export declare const Lesson: (new (init: ModelInit<Lesson>) => Lesson) & {
  copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

type EagerUserToLesson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToLesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserID: string;
  readonly LessonID: string;
  readonly AccessEnabled: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserToLesson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToLesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserID: string;
  readonly LessonID: string;
  readonly AccessEnabled: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserToLesson = LazyLoading extends LazyLoadingDisabled ? EagerUserToLesson : LazyUserToLesson

export declare const UserToLesson: (new (init: ModelInit<UserToLesson>) => UserToLesson) & {
  copyOf(source: UserToLesson, mutator: (draft: MutableModel<UserToLesson>) => MutableModel<UserToLesson> | void): UserToLesson;
}