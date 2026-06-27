/**
 * Apstal Analytics SDK - ES Module Wrapper
 */

export function initApstal(projectId, options = {}) {
  if (typeof window === 'undefined') {
    return; // Prevent errors during Server-Side Rendering (SSR)
  }

  // Prevent duplicate script injection
  if (document.getElementById('apstal-analytics-script')) {
    return;
  }

  // Create and append script tag loading the tracker from the CDN
  const script = document.createElement('script');
  script.id = 'apstal-analytics-script';
  script.defer = true;
  script.src = options.endpoint || 'https://apstal.com/apstal';
  script.setAttribute('data-project', projectId);

  document.head.appendChild(script);
}
