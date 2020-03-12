import { Router } from 'express';

/**
 * Interface for Route
 *
 * @export
 * @interface IRoute
 */
export interface IRoute {
  uri: string;
  uriRouter: Router;
}

export interface IRouteCollection {
  [name: string]: IRoute;
}
