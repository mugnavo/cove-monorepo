import { DEFAULT_REDACT_CONFIG } from "@repo/logger/config";
import evlog from "evlog/nitro/v3";
import { defineConfig } from "nitro";

export default defineConfig({
  experimental: {
    // Required by the Start adapter in src/lib/logger.server.ts.
    asyncContext: true,
  },
  modules: [
    evlog({
      env: { service: "web" },
      redact: DEFAULT_REDACT_CONFIG,
    }),
  ],
});
