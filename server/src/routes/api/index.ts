import * as express from 'express';
import feedRouter from './feed';
import { IRouteCollection } from '../../interfaces/route';
import { route } from '../../helpers/utils';

const router = express.Router();
const API_ROUTES: IRouteCollection = {
  FEED: { uri: '/feed', uriRouter: feedRouter },
};

/**
 * Route api routes
 */
export default route(API_ROUTES, router);
