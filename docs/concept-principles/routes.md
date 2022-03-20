---
sidebar_position: 4
---

# Routes

By design, Pandawa takes care most of the handling of any routes. It leverages the route configuration using YAML files to simplify the creation of a route, for example:

```yaml
# Api/Resources/routes/routes.yaml
products:
  type: group
  children: _product.yaml

# Api/Resources/routes/_product.yaml
products:
  type: resource
  path: products
  rules: [manage_product]
```

## Types

There is some core types for different purposes to define a route.

### `group`

This type is self-explanatory, it groups different routes together. This type usually is used for a specific route group or route children.

:::info Example
```yaml
products:
  type: group
  children: _product.yaml
```
:::

### `resource`

This acts the same like Laravel's resource controller. You don't have to write your implementation yourself since Pandawa already did the hard-lifting.

:::info Example
```yaml
products:
  type: resource
  path: products
  rules: [manage_product]
```
:::

### `message`

This one is little bit complex and different from the rest. This type will refer an handler *(command/query/etc.)* and invoke it.

:::info Example
```yaml
create_product:
  type: message
  message: create-product
  path: products
  methods: [post]
```
:::

### `presenter`

As for this one, it's the same as route handler you usually do in vanilla Laravel. You'll have to manually write the route implementation and things. It's all in your hand...

:::info Example
```yaml
product_image:
  type: presenter
  presenter: image
  path: products/{product}/image
  methods: [get]
```
:::