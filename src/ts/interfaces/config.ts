interface ENV {
  NODE_ENV: string | undefined;
  API_URL: string | undefined;
  API_TOKEN: string | undefined;
}

interface Config {
  NODE_ENV: string;
  API_URL: string;
  API_TOKEN: string;
}

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
  };
};

const config = getConfig();

export default config;
