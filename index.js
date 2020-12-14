"use strict";

module.exports = {
  defaultSeverity: "error",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
  ],
  rules: {
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
      },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    'no-descending-specificity': null,
  },
};
