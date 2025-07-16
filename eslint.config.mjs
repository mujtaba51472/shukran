import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [
            { char: ">", alternatives: ["&gt;"] },
            { char: "}", alternatives: ["&rbrace;"] },
            // Explicitly exclude apostrophe from forbidden characters
          ],
          // Add this to specifically allow apostrophes
          exceptions: [
            "'", // apostrophe
            "’", // right single quotation mark
            "‘", // left single quotation mark
          ],
        },
      ],
    },
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        React: true,
        JSX: true,
      },
    },
  },
];

export default eslintConfig;