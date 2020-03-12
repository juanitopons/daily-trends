import * as express from 'express';
import { IRouteCollection } from '../../interfaces/route';
import { route } from '../../helpers/utils';

const router = express.Router();
const API_ROUTES: IRouteCollection = {};

/**
 * Route api routes
 */
export default route(API_ROUTES, router);
