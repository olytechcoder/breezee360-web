// Single source of truth for launch state.
export const LAUNCH_DATE = new Date("2026-06-01T00:00:00Z");
export const APP_STORE_URL = "#"; // placeholder until launch
export const GOOGLE_PLAY_URL = "#"; // placeholder until launch

export function isLaunched(now = new Date()) {
  return now >= LAUNCH_DATE;
}
