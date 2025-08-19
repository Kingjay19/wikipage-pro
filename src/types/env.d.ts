declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_USER: string;
    EMAIL_PASS: string;
    EMAIL_TO: string;
    NODE_ENV: 'development' | 'production';
  }
}