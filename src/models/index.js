// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Lesson, UserToLesson } = initSchema(schema);

export {
  User,
  Lesson,
  UserToLesson
};