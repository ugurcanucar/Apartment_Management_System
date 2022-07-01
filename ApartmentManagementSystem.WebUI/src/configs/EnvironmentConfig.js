const dev = {
  API_ENDPOINT_URL: "https://localhost:44358/api/",
};
const prod = {
  API_ENDPOINT_URL: "https://localhost:44358/api/",
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    default:
      break;
  }
};

export const env = getEnv();
