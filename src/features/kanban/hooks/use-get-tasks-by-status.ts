import { useGetTasksQuery } from "../api/get-tasks/get-tasks.generated";
import { hasData } from "../utils/has-data";
import { Status } from "@/__generated__/types";

export const useGetTasksByStatus = (status: Status) => {
  const { loading, error, data } = useGetTasksQuery({
    variables: { input: { status } },
  });

  const isEmpty = hasData(data?.tasks);
  const tasks = data?.tasks || [];

  return {
    isEmpty,
    tasks,
    loading,
    error,
  };
};
