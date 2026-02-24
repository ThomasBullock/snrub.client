/**
 * Validation constants for form fields
 */

// Regex patterns
export const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Field max lengths
export const MAX_LENGTH = {
  EMAIL: 254, // RFC 5321 standard
  NAME: 100,
  ROLE: 50,
  REPORT_DESCRIPTION: 1000,
} as const;
