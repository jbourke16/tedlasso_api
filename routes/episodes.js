import { Router } from 'express';
import * as controllers from '../controllers/episodes.js';

const router = Router();

router.get('/', controllers.getEpisodes);
router.get('/:id', controllers.getEpisode);
router.post('/', controllers.createEpisode);
router.put('/:id', controllers.updateEpisode);
router.delete('/:id', controllers.deleteEpisode);
router.get('/episode/:episodeName', controllers.getEpisodeByTitle)
router.put('/episode/:episodeName', controllers.updateEpisodeByName);
router.delete('/episode/:episodeName', controllers.deleteEpisodeByName);

export default router;