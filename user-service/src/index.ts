import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
//import 


dotenv.config()

const app = express();

app.use(express.json())
app.use(cors());

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`User Service is Running on PORT::${PORT}`));
