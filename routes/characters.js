import { Router } from 'express';
import * as controllers from '../controllers/characters.js';

const router = Router();

router.get('/', controllers.getCharacters);
router.get('/:id', controllers.getCharacter);
router.post('/', controllers.createCharacter);
router.put('/:id', controllers.updateCharacter);
router.delete('/:id', controllers.deleteCharacter);
router.get('/character/:character', controllers.getCharacterByName);
router.get('/actor/:actorName', controllers.getActorByName);
router.put('/character/:character', controllers.updateCharacterByName);
router.delete('/character/:character', controllers.deleteCharacterByName);

export default router;