import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
    root,
    plugins: [tailwindcss()],
    build: {
        outDir: resolve(root, '../../../public/themes/tentapress/tailwind/build'),
        emptyOutDir: true,
        manifest: 'manifest.json',
        rollupOptions: {
            input: {
                'theme.css': resolve(root, 'resources/css/theme.css'),
                'theme.js': resolve(root, 'resources/js/theme.js'),
            },
        },
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
