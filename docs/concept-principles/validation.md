---
sidebar_position: 5
---

# Validation

Declaring a rule is easy as smashing a cardboard wall 😃

## Declaring a rule

1. Make a YAML file in `Resources/rules` of any folder inside your app `src`.
2. Using the following template, feel free to fill it to your use-case.

  ```yaml
  rule_name:
    constraints:
      key: "required|string"
      key2: "required|integer"
  ```

  Constraints values are the same as Laravel's validation types. This doesn't only apply to the request body but also includes URL parameter, query, etc.

## Using the rule

All you need to add a single line to your route configuration

```yaml
rules: [rule_name]
```

:::info Example
```yaml
create_product:
  type: message
  message: create-product
  path: products
  methods: [post]
  # highlight-next-line
  rules: [manage_product]
```
:::