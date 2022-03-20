---
sidebar_position: 4
---

# CLI

Pandawa CLI is extension to the `artisan` command from Laravel. You could view the list by running `php artisan`.

## Specification

Below is list of general specification for Pandawa CLI.

### Prefix

Pandawa command always starts with `pandawa:`

:::info Example
- `php artisan pandawa:make:model`
- `php artisan pandawa:make:module`
- `php artisan pandawa:make:command-handler`
:::

### Arguments

Most of the time, it uses `<folder>:<file>` format for its command argument

:::info Example
- `php artisan pandawa:make:model Product:Product`
- `php artisan pandawa:make:module Product:Product`
- `php artisan pandawa:make:command-handler Product:CreateProduct`

```html
<!-- php artisan pandawa:make:model Product:Product -->

src
└───Pandawa
<!-- highlight-next-line -->
    └───Product <folder>
        └───Model
<!-- highlight-next-line -->
            └───Product.php <file>
```
:::

### Target Directory

As for the current time, all generated files from the CLI will be put in the `src` directory