/**
 * Apstal Analytics SDK - ES Module Wrapper
 */

export function initApstal(projectId, options = {}) {
  if (typeof window === 'undefined') {
    // Prevent errors during SSR (Server-Side Rendering in Next.js/Nuxt)
    return;
  }

  // Set configuration globally
  window.APSTAL_PROJECT_ID = projectId;
  
  if (options.endpoint) {
    window.APSTAL_ENDPOINT = options.endpoint;
  }

  // Dynamically load the tracking script logic
  require('./src/apstal.js');
}
