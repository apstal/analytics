# apstal-analytics

Official open-source tracking library for [Apstal](https://apstal.com) — the autonomous conversational AI Web Analyst that helps you find and explain user drop-offs, rage clicks, and conversion leaks in plain language.

## Features

- 🕵️‍♂️ **Cookieless Tracking**: No user-identifiable cookies stored.
- ⚡ **Lightweight & Fast**: Extremely minimal overhead, optimized payload sizing.
- 🤖 **AI-Ready Telemetry**: Collects detailed interaction data (dead clicks, rage clicks, hesitation, and scroll speed) for the AI Analyst.
- 🛡️ **PII Redaction**: Automatical scrubbing of emails, cards, SSNs, and passwords before sending.

## Installation

Install via npm:

```bash
npm install apstal-analytics
```

## Integration

### 1. HTML Script Method (Recommended)

Insert the tracker into your HTML using the package script (or a self-hosted bundle):

```html
<script 
  defer 
  data-project="YOUR_PROJECT_ID" 
  src="/node_modules/apstal-analytics/src/apstal.js">
</script>
```

### 2. Single Page Applications (React, Vue, Next.js, Nuxt)

For modern JS frameworks, import the package in your entry point:

```javascript
// Import the tracker
import 'apstal-analytics';

// Make sure window configuration is set before import or initialized in script
window.APSTAL_PROJECT_ID = "YOUR_PROJECT_ID";
```

For advanced settings, you can override the API endpoint:

```javascript
window.APSTAL_PROJECT_ID = "YOUR_PROJECT_ID";
window.APSTAL_ENDPOINT = "https://your-custom-proxy.com/api/v1/m";
import 'apstal-analytics';
```

## License

AGPL-3.0. Copyright (c) 2025-2026 Apstal.
