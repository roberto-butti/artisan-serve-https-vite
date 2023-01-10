import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import basicSsl from '@vitejs/plugin-basic-ssl'

const host = '127.0.0.1';
const port = '8000';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        basicSsl()
    ],
    server: {
        https: true,
        proxy: {
            '^(?!(\/\@vite|\/resources|\/node_modules))': {
                target: 'http://127.0.0.1:8000',
            }

        },

        host,

        port: 5173,
        //hmr: { protocol: 'https', host, port: 5174 },
        hmr: { host },
    }
});
