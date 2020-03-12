import { IRoute } from '../interfaces/route';
import { Router } from 'express';

export function route(routesCollection: any, router: Router): Router {
  const routesKeys = Object.keys(routesCollection);
  let i = 0;
  for (i; i < routesKeys.length; i++) {
    const route: IRoute = routesCollection[routesKeys[i]];
    router.use(route.uri, route.uriRouter);
  }

  return router;
}
