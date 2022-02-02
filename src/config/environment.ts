import dotenv from 'dotenv'

dotenv.config()

const ENV = {
  NODE: {
    DEVELOPMENT: process.env.NODE_ENV === 'development',
    STAGING: process.env.NODE_ENV === 'staging',
    PRODUCTION: process.env.NODE_ENV === 'production',
  },
  PORT: process.env.PORT || 1000,
  JWT: process.env.jwt || 'secret',
  DEV: {
    EMAIL: process.env.DEV_EMAIL || '',
  },
}

export { ENV }
