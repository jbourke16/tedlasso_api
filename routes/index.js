import { Router } from 'express';
import characterRoutes from './characters.js';
import episodeRoutes from './episodes.js';
import quoteRoutes from './quotes.js';

const router = Router();

router.get('/', (req, res) => res.send("This is the API root"));

router.use('/characters', characterRoutes);
router.use('/episodes', episodeRoutes);
router.use('/quotes', quoteRoutes);

export default router;
