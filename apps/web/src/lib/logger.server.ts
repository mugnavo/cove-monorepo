import "@tanstack/react-start/server-only";
import type { RequestLogger } from "@repo/logger";
import { useRequest } from "nitro/context";

/** Returns the evlog logger attached to the current Nitro request. */
export function useLogger() {
  const log = useRequest().context?.log;

  if (!log) {
    throw new Error("evlog is not initialized for the current request");
  }

  // evlog adds this runtime field; srvx intentionally types request context as unknown.
  return log as RequestLogger;
}
