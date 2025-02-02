import dotnev from 'dotenv'


dotnev.config()


export const config = {
    PORT: process.env.PORT || 5001,
    JWT_SECRET: process.env.JWT_SECRET || 'mysecret',
    // DATABASE_URL
}