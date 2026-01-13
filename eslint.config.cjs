const js = require("@eslint/js");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const next = require("@next/eslint-plugin-next");
const tseslint = require("typescript-eslint");

const typeCheckedConfigs = tseslint.configs.recommendedTypeChecked.map(
  (config) => {
    if (config.files) return config;
    return {
      ...config,
      files: ["**/*.{ts,tsx,mts,cts}"],
    };
  }
);

module.exports = [
  {
    ignores: [
      "node_modules",
      ".next",
      "out",
      "build",
      "dist",
      "public",
      "*.config.js",
      "*.config.cjs",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
  js.configs.recommended,
  ...typeCheckedConfigs,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@next/next": next,
      "@typescript-eslint": tseslint.plugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      // React
      "react/react-in-jsx-scope": "off", // Next.js doesn't need this
      "react/prop-types": "off", // Using TypeScript
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",
      "react/jsx-key": "error",
      "react/no-unescaped-entities": "warn",
      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Next.js
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",
      // General Best Practices
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      "no-debugger": "warn",
      "no-alert": "warn",
      "no-var": "error",
      "prefer-const": "warn",
      "prefer-arrow-callback": "warn",
      "prefer-template": "warn",
      "object-shorthand": "warn",
      "quote-props": ["warn", "as-needed"],
      // Code Quality
      "no-duplicate-imports": "error",
      "no-unused-expressions": "warn",
      "no-nested-ternary": "warn",
      "max-depth": ["warn", 4],
      "complexity": ["warn", 15],
      // Formatting (Prettier handled, but fallback)
      "semi": ["error", "never"],
      "quotes": ["error", "single", { avoidEscape: true }],
      "comma-dangle": ["error", "always-multiline"],
      "arrow-parens": ["error", "always"],
    },
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
];
