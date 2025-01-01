import { tagsTheme } from "../theme/tags-theme";

export const getVariantByName = (variant: string) => {
  switch (variant) {
    case "REACT":
      return tagsTheme.react;
    case "ANDROID":
      return tagsTheme.android;
    case "IOS":
      return tagsTheme.ios;
    case "RAILS":
      return tagsTheme.rails;
    case "NODE_JS":
      return tagsTheme.node_js;
    default:
      return tagsTheme.default;
  }
};
