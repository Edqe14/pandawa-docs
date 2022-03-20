---
sidebar_position: 3
---

# Repository

Repository in Pandawa is like an controller for models. This controls from saving and deleting data, fetching data, building a query and executing it, etc.

## Generating a new repository

You could run `php artisan pandawa:make:repo` to generate a base repository.

:::info
Read more about [CLI](/docs/getting-started/cli).
:::

Or, use the namespace at `Pandawa\Component\Ddd\Repository\Repository`.

<details>
  <summary>Template</summary>

  Replace the things encapsulated with `<>` including itself as well.

  ```php
  <?php

  declare(strict_types=1);

  namespace <Namespace>\<Folder>\Repository;

  use Pandawa\Component\Ddd\Collection;
  use Pandawa\Component\Ddd\Repository\Repository;

  class <What>Repository extends Repository
  {
      //->
  }
  ```
</details>

## Key Differences

TBA