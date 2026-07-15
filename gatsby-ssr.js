/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@400;500&family=Silkscreen:wght@400&display=swap';

// No-flash color mode: resolves the stored preference (light/dark/system,
// default system via prefers-color-scheme) before first paint, sets
// html[data-theme] for the marketing pages' CSS, and syncs theme-ui's class +
// storage so the blog renders in the same mode. Runtime counterpart lives in
// src/theme/color-mode.js; keep the two in step.
const COLOR_MODE_SCRIPT = `
(function () {
  try {
    var pref = localStorage.getItem('theme-preference');
    if (pref !== 'light' && pref !== 'dark') pref = 'system';
    var mode =
      pref === 'system'
        ? window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark'
        : pref;
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme-ui-color-mode', mode);
    [document.documentElement, document.body].forEach(function (el) {
      if (!el) return;
      el.classList.remove('theme-ui-light', 'theme-ui-dark');
      el.classList.add('theme-ui-' + mode);
    });
  } catch (e) {}
})();
`;

// This runs after gatsby-plugin-theme-ui's own InitializeColorMode pre-body
// script (site gatsby-ssr.js runs last), so it can correct its classes.
export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="color-mode-no-flash"
      dangerouslySetInnerHTML={{ __html: COLOR_MODE_SCRIPT }}
    />,
  ]);
  setHeadComponents([
    <link
      key="preconnect-googleapis"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link key="webfonts" rel="stylesheet" href={FONTS_HREF} />,
  ]);
};
