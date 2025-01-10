export const tagsTheme = {
  react: {
    textColor: "var(--color-react)",
    backgroundColor: "var(--color-react-opacity)",
  },
  node_js: {
    textColor: "var(--color-node_js)",
    backgroundColor: "var(--color-node_js-opacity)",
  },
  android: {
    textColor: "var(--color-android)",
    backgroundColor: "var(--color-android-opacity)",
  },
  ios: {
    textColor: "var(--color-ios)",
    backgroundColor: "var(--color-ios-opacity)",
  },
  rails: {
    textColor: "var(--color-rails)",
    backgroundColor: "var(--color-rails-opacity)",
  },
  default: {
    textColor: "var(--color-neutral-2)",
    backgroundColor: "var(--color-neutral-opacity)",
  },
};

export type ThemeType = typeof tagsTheme;
