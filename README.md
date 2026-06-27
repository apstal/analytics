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
  src="https://apstal.com/apstal">
</script>
```

### Step 5: Start Talking to Your AI Analyst
Deploy your website, open a few pages, and click a few buttons. Go back to [apstal.com/chat](https://apstal.com/chat). The system will automatically detect the installation, and you can start asking the AI assistant conversational questions about your visitors' behavior (e.g., *"why did mobile users drop off today?"*).

---

## 🛡️ Privacy & Compliance

Apstal processes data in compliance with applicable data protection laws, including the GDPR and CCPA:

- 🇪🇺 **GDPR & CCPA Compliant**: Apstal processes data strictly as a **Data Processor** on behalf of the Customer (the **Data Controller**), ensuring full compliance with GDPR and CCPA under our Data Processing Addendum (DPA).
- 🕵️‍♂️ **Cookieless Telemetry**: Does not use cookies, LocalStorage, or SessionStorage to track users across domains, minimizing legal compliance overhead.
- 🧼 **Client-Side PII Masking**: Forcefully replaces all Personally Identifiable Information (PII), passwords, and form inputs with asterisks (`***`) directly inside the visitor's browser *before* any transmission to the servers.
- 🌍 **IP Anonymization**: Momentarily processes IP addresses for geolocation and network classification. The raw IP address string is **never stored** in the database and is discarded immediately.
- ⚙️ **Consent & CMP Support**: Fully supports external Consent Management Platforms (CMPs). The implementation of appropriate cookie banners and consent mechanisms remains the sole responsibility of the site owner (Data Controller).

For more details, please review our official legal documents:
- 📄 [Data Processing Addendum (DPA)](https://apstal.com/dpa)
- 🔒 [Privacy Policy](https://apstal.com/privacy)
- 📝 [Terms of Service](https://apstal.com/terms)

## License

AGPL-3.0. Copyright (c) 2025-2026 Apstal.
