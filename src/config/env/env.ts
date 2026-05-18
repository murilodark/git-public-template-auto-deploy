// src/config/env/env.ts
export const env = {
  appName: import.meta.env.VITE_APP_NAME as string,
  appEnv: import.meta.env.VITE_APP_ENV as string,
  apiUrl: import.meta.env.VITE_API_URL as string,
  frontUrl: import.meta.env.VITE_FRONT_URL as string,
  enableDevtools: import.meta.env.VITE_ENABLE_DEVTOOLS === 'true',
  enableDebug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  enableLogs: import.meta.env.VITE_ENABLE_LOGS === 'true',
  requestTimeout: Number(import.meta.env.VITE_REQUEST_TIMEOUT ?? 30000),
};