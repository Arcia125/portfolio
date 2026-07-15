// Shared color-mode state for the whole site. The user's preference
// ('light' | 'dark' | 'system') lives in localStorage under PREFERENCE_KEY;
// the resolved mode ('light' | 'dark') is written to html[data-theme] for the
// marketing pages' CSS and mirrored into theme-ui's own storage key so the
// blog (gatsby-theme-blog / theme-ui) always agrees. gatsby-ssr.js inlines
// this same logic as a no-flash script that runs before first paint.

export const PREFERENCE_KEY = 'theme-preference';
export const THEME_UI_STORAGE_KEY = 'theme-ui-color-mode';

export const getStoredPreference = () => {
  try {
    const value = window.localStorage.getItem(PREFERENCE_KEY);
    if (value === 'light' || value === 'dark' || value === 'system') {
      return value;
    }
  } catch (e) {
    // localStorage unavailable; fall through to the default
  }
  return 'system';
};

export const savePreference = preference => {
  try {
    window.localStorage.setItem(PREFERENCE_KEY, preference);
  } catch (e) {
    // localStorage unavailable; the choice just won't persist
  }
};

export const resolveMode = preference => {
  if (preference !== 'system') return preference;
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    return 'light';
  }
  return 'dark';
};

export const applyMode = mode => {
  document.documentElement.setAttribute('data-theme', mode);
  try {
    window.localStorage.setItem(THEME_UI_STORAGE_KEY, mode);
  } catch (e) {
    // localStorage unavailable
  }
};
