import { Router } from 'express';
import * as controllers from '../controllers/quotes.js';

const router = Router();

router.get('/', controllers.getQuotes);
router.get('/:id', controllers.getQuote);
router.post('/', controllers.createQuote);
router.put('/:id', controllers.updateQuote);
router.delete('/:id', controllers.deleteQuote);
router.get('/quote/:characterName', controllers.getQuoteByCharacter);

export default router;