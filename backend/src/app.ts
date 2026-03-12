import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
// import helmet from 'helmet';
// import cors from 'cors';
// import morgan from 'morgan';
import apiRoutes from './routes/api';

const app: Express = express();
const PORT = process.env.PORT || 3000;

// app.use(helmet());
// app.use(cors());
// app.use(morgan('combined'));
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'first rout is working!' });
});

app.listen(PORT, () => {
  console.log(`Сервер на http://localhost:${PORT}`);
});
