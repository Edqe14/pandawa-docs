---
sidebar_position: 1
---

# Installation

Here, you will learn how to install Pandawa and its glory!

## Using a skeleton project

1. Feel free to fork or clone [this repository](https://github.com/pandawa/pandawa-skeleton)
2. Install vendor dependencies using `composer install`
3. Verify the installation and run `php artisan` to list all commands, you should see some pandawa commands available. 

  ![CLI View](/img/tutorial/pandawa_cli.png)

4. You're set!

## Manual

TBA

## Troubleshooting

If you're having a hard time installing Pandawa, this might help you.

### Prequisites

Please make sure you've...

1. Enabled `sodium` extension. [How to](#enabling-sodium-extension)
2. Running php 8 or above

### Enabling `sodium` extension

1. Open your `php.ini` file in your php installation directory with your favorite text editor.
2. Find a collection of extension like on the image below

  ![php.ini](/img/tutorial/php_ini_extensions.png)

3. Add this line to your configuration file

  ```ini
  extension=sodium
  ```

4. Try to re-run the thing you're trying to do before.