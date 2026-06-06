// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When Netlify runs the build it sets NETLIFY=true. In that case we disable the
// Cloudflare plugin and tell TanStack Start to emit a Netlify-compatible build.
// Locally / on Lovable's hosting, none of this changes and Cloudflare stays the target.
const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  cloudflare: isNetlify ? false : undefined,
  tanstackStart: isNetlify ? { target: "netlify" } : undefined,
});
