import * as express from 'express';
import apiRoutes from './api';
import { IRouteCollection } from '../interfaces/route';
import { route } from '../helpers/utils';

const API_ROOT = process.env.API_URI || '/api';
const APP_ROUTES: IRouteCollection = {
  API: { uri: API_ROOT, uriRouter: apiRoutes },
};
const router = express.Router();

function appRoute() {
  return route(APP_ROUTES, router);
}

/**
 * Route server routes
 */
export default appRoute();
