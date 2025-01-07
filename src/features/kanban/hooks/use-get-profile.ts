import { useProfileQuery } from "../api/get-profile/get-profile.generated";

export const useGetProfile = () => {
  const { loading, error, data } = useProfileQuery();

  return {
    loading,
    error,
    profileId: data?.profile.id,
  };
};