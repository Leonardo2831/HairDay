import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    { 
        ignores: ["node_modules/**"] 
    },
    { 
        files: ["**/*.{js,mjs,cjs,ts}"] 
    },
    { 
        languageOptions: { 
            globals: { 
                ...globals.browser, 
                ...globals.node 
            } 
        } 
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            indent: ["error", 4],
            semi: ["error"],
            "operator-assignment": "error",
            "no-inner-declarations": [
                "error",
                "functions",
                { blockScopedFunctions: "disallow" },
            ],
        },
    },
];
