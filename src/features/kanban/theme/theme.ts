export const theme = {
  success: {
    textColor: "var(--color-secondary-4)",
    backgroundColor: "var(--color-secondary-opacity)",
  },
  warning: {
    textColor: "var(--color-tertiary-4)",
    backgroundColor: "var(--color-tertiary-opacity)",
  },
  error: {
    textColor: "var(--color-primary-4)",
    backgroundColor: "var(--color-primary-opacity)",
  },
  default: {
    textColor: "var(--color-neutral-2)",
    backgroundColor: "var(--color-neutral-opacity)",
  },
};

export type ThemeType = typeof theme;
