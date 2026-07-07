import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const withoutReactPluginRules = (configs) =>
  configs.map(({ rules, ...config }) =>
    rules
      ? {
          ...config,
          rules: Object.fromEntries(
            Object.entries(rules).filter(([rule]) => !rule.startsWith("react/")),
          ),
        }
      : config,
  );

const eslintConfig = [
  ...withoutReactPluginRules(nextVitals),
  ...withoutReactPluginRules(nextTypescript),
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**", "build/**"],
  },
];

export default eslintConfig;
