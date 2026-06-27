# @apstal/analytics

Official open-source tracking library for [Apstal](https://apstal.com) — the autonomous conversational AI Web Analyst that helps you find and explain user drop-offs, rage clicks, and conversion leaks in plain language.

---

## 🚀 Quick Start Guide (Step-by-Step)

Follow these steps to integrate Apstal AI Web Analytics into your website:

### Step 1: Sign Up & Log In
1. Go to [apstal.com/chat](https://apstal.com/chat).
2. Log in using your Google account or email.

### Step 2: Enter Your Website URL
On the onboarding screen, enter your website's URL (e.g., `yoursite.com`) and click **"Continue"**. Apstal will automatically create your project, detect your website's tech stack, and generate your unique **Project ID** (looks like `xxxx-xxxx-xxxx`).

### Step 3: Install the Package
Run the following command in your website project's root folder:

```bash
npm install @apstal/analytics
```

### Step 4: Initialize Apstal in Your Code

#### For Single Page Applications (React, Next.js, Vue, Nuxt)
Import the initialization function in your main entry file (e.g., `layout.tsx`, `App.js`, or `index.js`) and run it:

```javascript
import { initApstal } from '@apstal/analytics';

// Initialize the tracker
initApstal('YOUR_PROJECT_ID'); // Replace with the Project ID from Step 2
```

#### For Classic HTML Pages
If you are building a static landing page or a WordPress site, add this code block before the closing `</body>` tag of your HTML:

```html
<script 
  defer 
  data-project="YOUR_PROJECT_ID" 
  src="/node_modules/@apstal/analytics/src/apstal.js">
</script>
```

### Step 5: Start Talking to Your AI Analyst
Deploy your website, open a few pages, and click a few buttons. Go back to [apstal.com/chat](https://apstal.com/chat). The system will automatically detect the installation, and you can start asking the AI assistant conversational questions about your visitors' behavior (e.g., *"why did mobile users drop off today?"*).

---

## 🛡️ Privacy & Compliance

Apstal is designed to comply with strict privacy regulations:
- 🕵️‍♂️ **Cookieless**: No persistent tracking cookies are stored.
- 🇪🇺 **GDPR / CCPA Compliant**: Out-of-the-box compliance, no annoying cookie banners required.
- 🧼 **PII Scrubbing**: Automatically redacts emails, credit cards, passwords, and tokens before they reach the server.

## License

AGPL-3.0. Copyright (c) 2025-2026 Apstal.
