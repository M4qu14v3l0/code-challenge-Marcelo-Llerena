import { useGetUsersQuery } from "@/features/kanban/api/get-users/get-users.generated";

export const useGetUserOptions = () => {
  const { data } = useGetUsersQuery();
  const userOptions = data?.users.map((user) => {
    return { label: user.fullName, value: user.id, img: user.avatar };
  });

  return {
    userOptions,
  };
};
