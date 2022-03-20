---
sidebar_position: 3
---

# Directory Structure

Overall structure is similar to Laravel's structure with some modifications.

````diff
  root
  ├───app
- │   ├───Console
- │   ├───Exceptions
- │   ├───Http
- │   ├───Models
- │   ├───Providers
+ │   ├───acme
+ │   │   ├───Api
+ │   │   └───Web
+ │   └───laravel
+ │       ├───Bootstrap
+ │       ├───Console
+ │       ├───Exceptions
+ │       ├───Http
+ │       └───InjectModuleConfigTrait.php
  ├───bootstrap
  ├───config
  │   ├───app.php
  │   ├───auth.php
  │   ├───broadcasting.php
  │   ├───cache.php
  │   ├───database.php
  │   ├───filesystems.php
  │   ├───logging.php
  │   ├───mail.php
+ │   ├───packages.php
  │   ├───queue.php
  │   ├───services.php
  │   ├───session.php
  │   └───view.php
  ├───database
  ├───public
  ├───resources
+ ├───src
+ │   ├───Pandawa
+ │   │   ├───Category
+ │   │   └───Product
+ │   │       ├───Command
+ │   │       ├───Model
+ │   │       ├───Query
+ │   │       ├───Relation
+ │   │       ├───Repository
+ │   │       ├───Resources
+ │   │       ├───Service
+ │   │       └───ProductModule.php
  │   └───.gitkeep
  ├───storage
  ├───tests
  ├───.env
  ├───.env.example
  ├───.gitattributes
  ├───.gitignore
  ├───artisan
  ├───composer.json
  ├───composer.lock
  ├───package.json
  ├───phpunit.xml
  ├───readme.md
  ├───server.php
  └───webpack.mix.js
````

## Changes

````diff
+ Added `config/packages.php` for registering modules

+ Added `src` directory for internal modules
+ Seperated `app` to two directories, `laravel` and Pandawa's route configuration
- Direct usage of models, controllers is removed
````

### `packages.php`

This file is used to register all kind of modules. This is a **very critical** internal configuration to make things work.

### `src`

This directory contains most of internal modules like models, commands, rules, etc.

### `app`

The new directory structure seperates the `laravel` internal files with your route configuration files. This can be seen from the directory tree above.

- `<app_name>` is for your application routes module.
- `laravel` is for laravel routing configuration.

<details>
  <summary>To be tested</summary>

  As for the current time, we haven't tested what will happen if the app directory is different from the skeleton project.
  
  For example is moving the application routes module to `src` directory or moving the `laravel` directory to somewhere else.

  *For more context, please go to the [CLI](/docs/getting-started/cli#specification) section to learn more.*
</details>