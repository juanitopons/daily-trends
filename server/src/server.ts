import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as log4js from 'log4js';
import mongoose = require('mongoose');
import { database, mongoOptions } from './database/database';
import routes from './routes';
import ExpressServer from './express';

const DEVEL_ENV = 'development';
const logger = log4js.getLogger(`app-${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === DEVEL_ENV) {
  logger.level = 'debug';
}

// API routes
logger.info('Instantiating Express server....');
const expressServer = ExpressServer.getInstance();
const server = expressServer.getServer();
const app = expressServer.getApp();
const router = express.Router();

//Connect mongoose to our database
mongoose.connect(database, mongoOptions);

const db = mongoose.connection;

//Bind connection to error event
db.on('error', logger.error.bind(logger, 'MongoDB connection error:'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Access control
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
  next();
});

// Set our api routes
app.use('', routes);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.SERVER_INTERNAL_PORT;
app.set('port', port);

/**
 * Serve static files if needed
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(process.env.SERVER_INTERNAL_PORT, () => {
  logger.info('==== Docker DailyTrends Server Container ====');
  logger.info(
    `Server started in port -> ${process.env.SERVER_INTERNAL_PORT} (${process.env.SERVER_EXTERNAL_PORT})`,
  );
  logger.info(`Server started in env -> ${process.env.NODE_ENV}`);
  logger.info(`Node version -> ${process.version}`);
  logger.info(`Server started with exec-arguments -> ${process.execArgv}`);
  logger.info(`Server started with args -> ${process.argv.toString()}`);
  logger.info(`Current date -> ${new Date()}`);
});

export default router;
