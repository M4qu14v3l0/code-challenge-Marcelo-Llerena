import { theme } from "../theme/alerts-theme";

export const getVariant = (variant: string) => {
  switch (variant) {
    case "success":
      return theme.success;
    case "warning":
      return theme.warning;
    case "error":
      return theme.error;
    case "default":
      return theme.default;
    default:
      return theme.default;
  }
};
