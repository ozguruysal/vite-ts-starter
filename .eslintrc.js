module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },

  plugins: ["@typescript-eslint"],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],

  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },

  rules: {
    // Vue
    "vue/require-default-prop": "off",

    // Eslint
    "eol-last": ["error", "always"],
    "no-console": "warn",
    semi: ["error", "always"],
  },
};
