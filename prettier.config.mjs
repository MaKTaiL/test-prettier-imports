/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 * @type {import("prettier-plugin-tailwindcss").PluginOptions}
 * @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig}
 */
const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: ["<TYPES>", "", "<THIRD_PARTY_MODULES>", "^@/", "^[./]"],
  endOfLine: "auto",
};

export default config;
