declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'production' | 'development';
        API_URL: string;
        API_TOKEN: string;
    }
}