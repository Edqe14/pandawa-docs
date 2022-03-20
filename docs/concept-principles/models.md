---
sidebar_position: 1
---

# Models

For ORM using Pandawa, we use Pandawa's `AbstractModel` instead of Laravel's `Model`.

## Generating a new model

You could run `php artisan pandawa:make:model` to generate a base model.

:::info
Read more about [CLI](/docs/getting-started/cli).
:::

Or, use the namespace at `Pandawa\Component\Ddd\AbstractModel`.

<details>
  <summary>Template</summary>

  Replace the things encapsulated with `<>` including itself as well.

  ```php
  <?php

  declare(strict_types=1);

  // highlight-next-line
  namespace <Namespace>\<Folder>\Model;

  use Pandawa\Component\Ddd\AbstractModel;

  // highlight-next-line
  class <Name> extends AbstractModel
  {
      //->
  }
  ```
</details>

## Key Differences

- You cannot delete or save an model directly without using a [Repository](/docs/usage-concepts/repository).
- You don't need to set `$guarded` or `$fillable` attributes manually.