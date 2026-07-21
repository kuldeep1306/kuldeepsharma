import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;

  if (!adminUser || !adminPass) return res.status(500).json({ message: 'Server not configured' });

  if (username === adminUser && password === adminPass) {
    const secret = process.env.JWT_SECRET || 'dev-secret';
    const token = jwt.sign({ user: username }, secret, { expiresIn: '7d' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

export default router;
