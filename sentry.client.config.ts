// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://6cfa975a0ae1061b97c93fc62aeda275@o4508128956448768.ingest.us.sentry.io/4508128965230592", // Use env variable

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1.0, // Lower sample rate in production

  // Define how likely Replay events are sampled.
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.05 : 0.1, // Adjust sample rate in production

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: process.env.NODE_ENV === 'production' ? 0.5 : 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: process.env.NODE_ENV !== 'production', // Debug mode only in development

  beforeSend(event, hint) {
    // Explicitly type hint and hint.originalException to avoid TypeScript errors
    if (hint?.originalException && (hint.originalException as any).name === 'BlockedByClient') {
      return null; // Prevent sending this error to Sentry
    }
    return event;
  }
});
