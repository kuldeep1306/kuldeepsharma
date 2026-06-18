import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import projectRoutes from './routes/projectRoutes.js';
import contentRoutes from './routes/contentRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Load the .env located in the server folder reliably even when the process
// is started from the repository root.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/auth', authRoutes);

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
