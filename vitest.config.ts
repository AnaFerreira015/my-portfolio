import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: [
        "src/App.tsx",
        "src/components/site/**/*.{ts,tsx}",
        "src/pages/**/*.{ts,tsx}",
        "src/data/**/*.{ts,tsx}",
        "src/lib/**/*.{ts,tsx}",
      ],
      exclude: [
        "src/main.tsx",
        "src/components/ui/**",
        "src/components/NavLink.tsx",
        "src/hooks/**",
        "src/test/**",
        "tests/**",
        "**/*.config.*",
        "**/dist/**",
        "**/coverage/**",
      ],
      thresholds: {
        statements: 80,
        branches: 60,
        functions: 70,
        lines: 80,
      },
    },
  },
});