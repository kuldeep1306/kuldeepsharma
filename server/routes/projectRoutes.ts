import { Router } from 'express';
import Project from '../models/Project.js';

const router = Router();

router.get('/', async (_, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

router.post('/', async (req, res) => {
  const { title, summary, tags, link } = req.body;
  const project = new Project({ title, summary, tags, link });
  await project.save();
  res.status(201).json(project);
});

export default router;
