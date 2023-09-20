import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

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

export default
