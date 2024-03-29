import dotenv from 'dotenv'
dotenv.config({ silent: true });

export const config = {
  port: process.env.PORT || 3001,
  apiKey: process.env.CODAT_API_KEY,
  codatBaseUrl: process.env.API_BASE_URL || 'https://api.codat.io'
}
