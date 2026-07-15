import React, { useEffect, useState } from 'react';
import { useColorMode } from 'theme-ui';

import {
  getStoredPreference,
  savePreference,
  resolveMode,
  applyMode,
} from '../theme/color-mode';
import './theme-toggle.css';

// Three-way color mode picker: light / follow-system / dark. Used in the
// marketing nav and (via the gatsby-theme-blog header shadow) on blog pages.
// Setting a mode updates both html[data-theme] (marketing CSS) and theme-ui's
// color mode (blog), so the whole site stays in sync.

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="1.5" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22.5" y2="12" />
      <line x1="4.5" y1="4.5" x2="6.3" y2="6.3" />
      <line x1="17.7" y1="17.7" x2="19.5" y2="19.5" />
      <line x1="4.5" y1="19.5" x2="6.3" y2="17.7" />
      <line x1="17.7" y1="6.3" x2="19.5" y2="4.5" />
    </g>
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
      fill="currentColor"
    />
  </svg>
);

const OPTIONS = [
  { value: 'light', label: 'Light mode', content: <SunIcon /> },
  { value: 'system', label: 'Follow system color scheme', content: 'AUTO' },
  { value: 'dark', label: 'Dark mode', content: <MoonIcon /> },
];

const ThemeToggle = () => {
  const [, setColorMode] = useColorMode();
  // The preference is only knowable in the browser; read it after mount so
  // server-rendered markup hydrates without mismatches.
  const [preference, setPreference] = useState(null);

  useEffect(() => {
    setPreference(getStoredPreference());
  }, []);

  // While following the system, live-update if the OS scheme changes.
  useEffect(() => {
    if (preference !== 'system' || !window.matchMedia) return undefined;
    const query = window.matchMedia('(prefers-color-scheme: light)');
    const followSystem = () => {
      const mode = resolveMode('system');
      applyMode(mode);
      setColorMode(mode);
    };
    if (query.addEventListener) {
      query.addEventListener('change', followSystem);
      return () => query.removeEventListener('change', followSystem);
    }
    query.addListener(followSystem);
    return () => query.removeListener(followSystem);
  }, [preference, setColorMode]);

  const choose = value => {
    setPreference(value);
    savePreference(value);
    const mode = resolveMode(value);
    applyMode(mode);
    setColorMode(mode);
  };

  return (
    <div className="theme-toggle" role="group" aria-label="Color mode">
      {OPTIONS.map(({ value, label, content }) => (
        <button
          key={value}
          type="button"
          title={label}
          aria-label={label}
          aria-pressed={preference === value}
          onClick={() => choose(value)}
        >
          {content}
        </button>
      ))}
    </div>
  );
};

export { ThemeToggle };
export default ThemeToggle;
