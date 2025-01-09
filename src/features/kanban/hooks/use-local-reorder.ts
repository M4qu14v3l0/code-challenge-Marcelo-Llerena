import { useApolloClient } from "@apollo/client";
import { FilterTaskInput, Status } from "@/__generated__/types";
import {
  GetTasksDocument,
  GetTasksQuery,
} from "../api/get-tasks/get-tasks.generated";

export const useLocalReorder = () => {
  const client = useApolloClient();

  const forceLocalReorder = (
    taskId: string,
    newStatus: Status,
    newPosition: number
  ) => {
    const currentData = client.readQuery<GetTasksQuery>({
      query: GetTasksDocument,
      variables: {
        input: {
          status: undefined,
        } as FilterTaskInput,
      },
    });

    if (!currentData?.tasks) return;

    const taskToUpdate = currentData.tasks.find((t) => t.id === taskId);
    if (!taskToUpdate) return;

    const updatedTask = {
      ...taskToUpdate,
      status: newStatus,
      position: newPosition,
    };

    const newTasks = currentData.tasks.filter((t) => t.id !== taskId);
    const tasksInNewStatus = newTasks.filter((t) => t.status === newStatus);

    const reorderedTasksInNewStatus = tasksInNewStatus.map((t) => {
      if (t.position >= newPosition) {
        return {
          ...t,
          position: t.position + 1,
        };
      }
      return t;
    });

    const tasksInNewStatusWithInserted = [
      ...reorderedTasksInNewStatus,
      updatedTask,
    ];

    tasksInNewStatusWithInserted.sort((a, b) => a.position - b.position);

    const tasksNotInNewStatus = newTasks.filter((t) => t.status !== newStatus);
    const finalTasks = [
      ...tasksNotInNewStatus,
      ...tasksInNewStatusWithInserted,
    ];

    client.writeQuery<GetTasksQuery>({
      query: GetTasksDocument,
      variables: {
        input: {
          status: undefined,
        } as FilterTaskInput,
      },
      data: {
        tasks: finalTasks,
      },
    });
  };

  return { forceLocalReorder };
};
