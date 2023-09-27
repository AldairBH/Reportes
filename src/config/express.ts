import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { userRouter } from '../modules/user/adapters/user.controller';

const app = express();


app.use(
    cors({
        origin: '*'
    })
);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({limit: '20mb'}))

app.get('/', (req, res) => {
    res.send('Server running...');
})

//ROUTES
app.use('/api/user', userRouter);

export default app;
