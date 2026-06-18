import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js';
import contentRoutes from './routes/contentRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/content', contentRoutes);

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', message: 'Deepindiary API running' });
});

async function startServer() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error('MONGO_URI is not defined in environment variables.');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}

startServer();
