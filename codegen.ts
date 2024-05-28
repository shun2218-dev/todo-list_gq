import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "apollo/documents/**/*.gql",
  documents: ["apollo/documents/**/*.gql"],
  generates: {
    "./apollo/__generated__/client/operations-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        withComponent: false,
        withHOC: false,
        withHooks: true,
      },
    },
    "./apollo/__generated__/server/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
