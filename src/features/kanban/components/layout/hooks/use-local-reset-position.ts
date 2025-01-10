import { useApolloClient } from "@apollo/client";
import { FilterTaskInput, Status } from "@/__generated__/types";
import {
  GetTasksDocument,
  GetTasksQuery,
} from "../../../../../api/get-tasks/get-tasks.generated";

export const useLocalResetPosition = () => {
  const client = useApolloClient();

  const resetPositioning = (newStatus: Status) => {
    const currentData = client.readQuery<GetTasksQuery>({
      query: GetTasksDocument,
      variables: {
        input: {
          status: undefined,
        } as FilterTaskInput,
      },
    });

    if (!currentData?.tasks) return;

    const tasksInNewStatus = currentData.tasks.filter(
      (t) => t.status === newStatus
    );

    let position = 0;
    const resetPositionInTasksByStatus = tasksInNewStatus.map((t) => {
      position = position + 1;
      return { ...t, position };
    });

    const tasksNotInNewStatus = currentData?.tasks.filter(
      (t) => t.status !== newStatus
    );
    const finalTasks = [
      ...tasksNotInNewStatus,
      ...resetPositionInTasksByStatus,
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

  return { resetPositioning };
};
