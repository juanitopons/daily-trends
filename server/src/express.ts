import * as http from 'http';
import express from 'express';

export default class ExpressServer {
  private app: express.Express;
  private server: http.Server;
  private static instance: ExpressServer;

  private constructor() {
    /**
     * Express server
     */

    this.app = express();
    this.server = new http.Server(this.app);
  }

  static getInstance() {
    if (!ExpressServer.instance) {
      ExpressServer.instance = new ExpressServer();
    }

    return ExpressServer.instance;
  }

  getApp() {
    return this.app;
  }

  getServer() {
    return this.server;
  }
}
