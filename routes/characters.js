import { Router } from 'express';
import * as controllers from '../controllers/characters.js';

const router = Router();

router.get('/', controllers.getCharacters);
router.get('/:id', controllers.getCharacter);
router.post('/', controllers.createCharacter);
router.put('/:id', controllers.updateCharacter);
router.delete('/:id', controllers.deleteCharacter);
router.get('/:character', controllers.getCharacterByName);
router.get('/:actorName', controllers.getActorByName);

export default router;