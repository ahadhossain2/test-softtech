import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    reactVendor: ["react", "react-dom"],
                    motion: ["framer-motion"],
                    router: ["react-router-dom"],
                },
            },
        },
    },
});