import { auditRedactPreset, type RedactConfig } from "evlog";

/** Shared credential and sensitive-data redaction for every server integration. */
export const DEFAULT_REDACT_CONFIG = {
  ...auditRedactPreset,
  paths: [...(auditRedactPreset.paths ?? []), "cookies"],
} satisfies RedactConfig;
