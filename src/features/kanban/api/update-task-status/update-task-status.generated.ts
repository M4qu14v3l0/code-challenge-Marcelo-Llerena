import * as Types from '../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateTaskInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  dueDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  pointEstimate: PointEstimate;
  status: Status;
  tags: Array<TaskTag>;
};

export type DeleteTaskInput = {
  id: Scalars['String']['input'];
};

export type FilterTaskInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  pointEstimate?: InputMaybe<PointEstimate>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<TaskTag>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  deleteTask: Task;
  updateTask: Task;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

/** Estimate point for a task */
export enum PointEstimate {
  Eight = 'EIGHT',
  Four = 'FOUR',
  One = 'ONE',
  Two = 'TWO',
  Zero = 'ZERO'
}

export type Query = {
  __typename?: 'Query';
  profile: User;
  tasks: Array<Task>;
  users: Array<User>;
};


export type QueryTasksArgs = {
  input: FilterTaskInput;
};

/** Status for Task */
export enum Status {
  Backlog = 'BACKLOG',
  Cancelled = 'CANCELLED',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Todo = 'TODO'
}

export type Task = {
  __typename?: 'Task';
  assignee?: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  creator: User;
  dueDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pointEstimate: PointEstimate;
  position: Scalars['Float']['output'];
  status: Status;
  tags: Array<TaskTag>;
};

/** Enum for tags for tasks */
export enum TaskTag {
  Android = 'ANDROID',
  Ios = 'IOS',
  NodeJs = 'NODE_JS',
  Rails = 'RAILS',
  React = 'REACT'
}

export type UpdateTaskInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pointEstimate?: InputMaybe<PointEstimate>;
  position?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<TaskTag>>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  type: UserType;
  updatedAt: Scalars['DateTime']['output'];
};

/** Type of the User */
export enum UserType {
  Admin = 'ADMIN',
  Candidate = 'CANDIDATE'
}

export type UpdateTaskStatusMutationVariables = Types.Exact<{
  input: Types.UpdateTaskInput;
}>;


export type UpdateTaskStatusMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'Task', position: number, status: Types.Status } };


export const UpdateTaskStatusDocument = gql`
    mutation UpdateTaskStatus($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    position
    status
  }
}
    `;
export type UpdateTaskStatusMutationFn = Apollo.MutationFunction<UpdateTaskStatusMutation, UpdateTaskStatusMutationVariables>;

/**
 * __useUpdateTaskStatusMutation__
 *
 * To run a mutation, you first call `useUpdateTaskStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskStatusMutation, { data, loading, error }] = useUpdateTaskStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskStatusMutation, UpdateTaskStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskStatusMutation, UpdateTaskStatusMutationVariables>(UpdateTaskStatusDocument, options);
      }
export type UpdateTaskStatusMutationHookResult = ReturnType<typeof useUpdateTaskStatusMutation>;
export type UpdateTaskStatusMutationResult = Apollo.MutationResult<UpdateTaskStatusMutation>;
export type UpdateTaskStatusMutationOptions = Apollo.BaseMutationOptions<UpdateTaskStatusMutation, UpdateTaskStatusMutationVariables>;