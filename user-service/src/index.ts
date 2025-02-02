import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { config } from './config/env';
import { errorHandler } from './middlewares/error.middleware';
import { userRoute } from './routes/user.routes';

dotenv.config()

const app = express();

app.use(express.json())
app.use(cors());
app.use(errorHandler);

app.use('/api/users', userRoute)


app.listen(config.PORT, () => console.log(`User Service is Running on PORT::${config.PORT}`));
