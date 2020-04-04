module.exports = {
    "root": true,
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
      "no-unused-vars": ["error",
                         {
                           "vars": "local",
                           "args": "after-used"
                         }
                        ],
      // "@typescript-eslint/class-name-casing": "error",
      // "@typescript-eslint/explicit-member-accessibility": [
      //   "error",
      //   {
      //     "accessibility": "explicit"
      //   }
      // ],
      // "@typescript-eslint/indent": "error",
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          }
        }
      ],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "default": [
            'private-abstract-field',
            'private-abstract-method',
            'private-instance-field',
            'private-static-field',
            'private-instance-method',
            'private-static-method',
            'private-constructor',

            'protected-abstract-field',
            'protected-abstract-method',
            'protected-instance-field',
            'protected-static-field',
            'protected-instance-method',
            'protected-static-method',
            'protected-constructor',

            'public-abstract-field',
            'public-abstract-method',
            'public-static-field',
            'public-instance-field',
            'public-static-method',
            'public-instance-method',
            'public-constructor',

            'signature',
          ]
        }
      ],
      // "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-check": false
        }
      ],
      "@typescript-eslint/interface-name-prefix": [
        "error",
        {
          "prefixWithI": "always"
        }
      ],
      "@typescript-eslint/class-literal-property-style": [
        "error", "fields"
      ]
      // "@typescript-eslint/no-use-before-define": "error",
      // "@typescript-eslint/quotes": [
      //   "error",
      //   "double",
      //   {
      //     "avoidEscape": true
      //   }
      // ],
      // "@typescript-eslint/semi": [
      //   "error",
      //   "always"
      // ],
      // "@typescript-eslint/type-annotation-spacing": "error",
      // "camelcase": "off",
      // "comma-dangle": ["error", {
      //   "arrays": "never",
      //   "objects": "never",
      //   "imports": "never",
      //   "exports": "never",
      //   "functions": "never"
      // }],
      // "curly": "error",
      // "dot-notation": "error",
      // "eol-last": "error",
      // "eqeqeq": [
      //   "error",
      //   "smart"
      // ],
      // "guard-for-in": "error",
      // "id-blacklist": "off",
      // "id-match": "off",
      // "max-len": [
      //   "error",
      //   {
      //     "code": 140
      //   }
      // ],
      // "no-bitwise": "error",
      // "no-caller": "error",
      // "no-console": [
      //   "error",
      //   {
      //     "allow": [
      //       "log",
      //       "warn",
      //       "dir",
      //       "timeLog",
      //       "assert",
      //       "clear",
      //       "count",
      //       "countReset",
      //       "group",
      //       "groupEnd",
      //       "table",
      //       "dirxml",
      //       "error",
      //       "groupCollapsed",
      //       "Console",
      //       "profile",
      //       "profileEnd",
      //       "timeStamp",
      //       "context"
      //     ]
      //   }
      // ],
      // "no-debugger": "error",
      // "no-empty": "error",
      // "no-eval": "error",
      // "no-fallthrough": "error",
      // "no-new-wrappers": "error",
      // "no-redeclare": "error",
      // "no-shadow": [
      //   "error",
      //   {
      //     "hoist": "all"
      //   }
      // ],
      // "no-trailing-spaces": "error",
      // "no-underscore-dangle": "off",
      // "no-unused-expressions": "error",
      // "no-unused-labels": "error",
      // "no-var": "error",
      // "radix": "error",
      // "spaced-comment": "error"
    }
};
