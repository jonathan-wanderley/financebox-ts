import "dotenv/config";

const ENV = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
};

export default ENV;