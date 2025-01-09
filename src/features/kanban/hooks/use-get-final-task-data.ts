import {
  GetTasksDocument,
  GetTasksQuery,
} from "../api/get-tasks/get-tasks.generated";
import { FilterTaskInput } from "@/__generated__/types";
import { useApolloClient } from "@apollo/client";

export const useGetFinalTaskData = () => {
  const client = useApolloClient();

  const getFinalCardData = (taskId: string) => {
    const currentData = client.readQuery<GetTasksQuery>({
      query: GetTasksDocument,
      variables: {
        input: {
          status: undefined,
        } as FilterTaskInput,
      },
    });

    if (!currentData?.tasks) return null;

    const foundTask = currentData.tasks.find((task) => task.id === taskId);

    if (!foundTask) return null;

    return {
      id: foundTask.id,
      status: foundTask.status,
      position: foundTask.position,
    };
  };

  return { getFinalCardData };
};
