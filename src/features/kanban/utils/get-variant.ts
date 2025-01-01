import { alertsTheme } from "../theme/alerts-theme";

export const getVariant = (variant: string) => {
  switch (variant) {
    case "success":
      return alertsTheme.success;
    case "warning":
      return alertsTheme.warning;
    case "error":
      return alertsTheme.error;
    case "default":
      return alertsTheme.default;
    default:
      return alertsTheme.default;
  }
};
