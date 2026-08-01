import { defineConfig } from 'vite';
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: "src",
    base: "./",
    publicDir: resolve(__dirname, "static"),
    resolve: {
        alias: {
            "@mods": resolve(__dirname, "src", "mods"),
            "@styles": resolve(__dirname, "src", "styles"),
        }
    },
    css: {
        postcss: {
            config: resolve(__dirname, "postcss.config.js")
        }
    },
    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true,
        cssCodeSplit: true,
        modulePreload: false,
        target: "es2020",
        minify: "terser",
        terserOptions: {
            mangle: false,
            module: true,
            format: {
                preamble: "/** SimplyBuilder Refactor **/"
            }
        },
        rollupOptions: {
            output: {
                entryFileNames: 'assets/js/[name]-[hash:10].js',
                chunkFileNames: 'assets/js/[name]-[hash:10].js',
                format: 'es',
                assetFileNames: 'assets/[name][extname]'
            }
        }
    }
});
