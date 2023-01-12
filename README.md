# Your local Laravel application via HTTPS

Running `php artisan serve` starts the local PHP built-in web server.

It starts the server via HTTP protocol and by default binds the port 8000.
If you want to change the port you can set the `SERVER_PORT` parameter in the `.env` file.

```
SERVER_PORT=8004
```

But, what if you want to use the HTTPS protocol instead of the classical HTTP?
The `php artisan serve` command, today has no configuration parameter to control the protocol used.

The idea is to use Vite (included in the Laravel application) to answer all the local requests and use Vite as a proxy for requests that requires PHP resources.
Why Vite? Because with Vite we have the BasicSsl plugin that creates local certificates with no configuration.
So instead of configuring the Laravel configuration (`.env` file or `config/` directory), we will configure Vite via the `vite.config.js` file.
