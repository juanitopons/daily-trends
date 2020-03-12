import * as express from 'express';
import asyncHandler from '../../helpers/asyncHandler';
import FeedCtrl from '../../controllers/feed';

const router = express.Router();

router.get('/', asyncHandler(FeedCtrl.get));
router.put('/', asyncHandler(FeedCtrl.create));
router.put('/:id', asyncHandler(FeedCtrl.edit));
// router.delete('/:id', asyncHandler(FeedCtrl.deleteFeed));

/**
 * Route feed routes
 */
export default router;
