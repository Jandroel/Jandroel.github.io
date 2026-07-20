const prettierConfig = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 90,
  overrides: [
    {
      files: "*.svg",
      options: { parser: "html" },
    },
  ],
};

export default prettierConfig;
