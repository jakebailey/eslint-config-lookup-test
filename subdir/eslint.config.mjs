import globals from "globals";
import pluginJs from "@eslint/js";


console.log("Loading", import.meta.url);

export default [
  {languageOptions: { globals: globals.node }},
];
