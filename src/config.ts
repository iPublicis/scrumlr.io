export const firebase = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    'AIzaSyBcsvnI8T1fdNbDyipPQrK-rROIqtj8zT0',
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'scrumlr-dev.firebaseapp.com',
  databaseURL:
    process.env.REACT_APP_DATABASE_URL || 'https://scrumlr-dev.firebaseio.com',
  projectId: process.env.REACT_APP_PROJECT_ID || 'scrumlr-dev',
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'scrumlr-dev.appspot.com',
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '411585721031',
  enableRedirectHandling: false
};

const falsy = /^(?:f(?:alse)?|no?|0+)$/i;
const getBoolean = (val: any) => {
  return !falsy.test(val) && !!val;
};

export const authConfig = {
  enableGoogleIdentity:
    process.env.REACT_APP_ENABLE_GOOGLE_IDENTITY === undefined ||
    getBoolean(process.env.REACT_APP_ENABLE_GOOGLE_IDENTITY),
  enableTwitterIdentity:
    process.env.REACT_APP_ENABLE_TWITTER_IDENTITY === undefined ||
    getBoolean(process.env.REACT_APP_ENABLE_TWITTER_IDENTITY),
  enableGithubIdentity:
    process.env.REACT_APP_ENABLE_GITHUB_IDENTITY === undefined ||
    getBoolean(process.env.REACT_APP_ENABLE_GITHUB_IDENTITY),
  enableSamlIdentity:
    process.env.REACT_APP_ENABLE_SAML_IDENTITY === undefined
      ? false
      : getBoolean(process.env.REACT_APP_ENABLE_SAML_IDENTITY),
  allowAnonymousBoards:
    process.env.REACT_APP_ALLOW_ANONYMOUS_BOARDS === undefined ||
    getBoolean(process.env.REACT_APP_ALLOW_ANONYMOUS_BOARDS)
};

export const sentry = {
  dsn: process.env.REACT_APP_SENTRY_DSN
};

export const slack = {
  feedbackHook: process.env.REACT_APP_SLACK_FEEDBACK_HOOK
};
