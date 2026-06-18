import { Router } from 'express';
import Content from '../models/Content.js';

const router = Router();

router.get('/', async (_, res) => {
  const content = await Content.find().sort({ publishedAt: -1 });
  res.json(content);
});

router.post('/', async (req, res) => {
  const { title, description, category, publishedAt } = req.body;
  const item = new Content({ title, description, category, publishedAt });
  await item.save();
  res.status(201).json(item);
});

export default router;
