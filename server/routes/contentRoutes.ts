import { Router } from 'express';
import Content from '../models/Content.js';
import authMiddleware from '../middleware/auth.js';

const router = Router();

router.get('/', async (_, res) => {
  const content = await Content.find().sort({ publishedAt: -1 });
  res.json(content);
});

// Protected: only authenticated admin can create posts
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, category, publishedAt } = req.body;
  const item = new Content({ title, description, category, publishedAt });
  await item.save();
  res.status(201).json(item);
});

// Protected: delete a post by id
router.delete('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const deleted = await Content.findByIdAndDelete(id);
  if (!deleted) {
    return res.status(404).json({ message: 'Post not found.' });
  }
  res.json({ message: 'Post deleted.' });
});

export default router;
