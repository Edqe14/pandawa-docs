---
sidebar_position: 2
---

# Relation

Model relation is declared by using class traits and applied on the model itself.

## Generating a new relation

You could run `php artisan pandawa:make:relation` to generate a base relation.

:::info
Read more about [CLI](/docs/getting-started/cli).
:::

Or, use the namespace at `Pandawa\Component\Ddd\RelationshipBehaviorTrait`.

<details>
  <summary>Template</summary>

  Replace the things encapsulated with `<>` including itself as well.

  ```php
  <?php

  declare(strict_types=1);

  // highlight-next-line
  namespace <Namespace>\<Folder>\Relation;

  use Pandawa\Component\Ddd\Relationship\BelongsTo;
  use Pandawa\Component\Ddd\RelationshipBehaviorTrait;

  // highlight-next-line
  trait BelongsTo<Who>
  {
      use RelationshipBehaviorTrait;

      //->
  }
  ```
</details>

## Using the Relationship

Go to the model you want to apply the relationship to and use the relation trait.

:::info Example
```php
// ...
class Post extends AbstractModel
{
    use BelongsToUser;
}
```
:::