import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.VITE_TASK_MANAGER_API_URL as string;
const API_KEY = process.env.VITE_TASK_MANAGER_API_KEY;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [API_URL]: {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    },
  ],
  documents: "src/**/*.graphql",
  generates: {
    "src/__generated__/types.ts": { plugins: ["typescript"] },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "__generated__/types.ts",
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
