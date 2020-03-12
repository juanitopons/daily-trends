# daily-trends

Dockerized MEAN Stack DailyTrends App as a technical sample APP (project for learning).

## Getting Started

In the root, you should create an .env file with its values for .env.example enviroment variables

- API_URI= (/api)
- NODE_ENV= (development|stagging|production)
- NODE_DEBUG_AND_PORT= (9229) Node inspection debugging port
- MONGO_HOSTNAME= (mongo) docker service
- MONGO_PORT= (27017) Mongo service internal port
- MONGO_DB= (dailytrends-devel) Mongo's DB name
- MONGO_EXTERNAL_PORT= (27017) Mongo Docker service published port
- SERVER_INTERNAL_PORT= (3000) Node Docker internal service exposed port
- SERVER_EXTERNAL_PORT= (3000) Node Docker service published port
- CLIENT_INTERNAL_PORT= (4200) Angular Docker internal service exposed port
- CLIENT_EXTERNAL_PORT= (4200) Angular Docker service published port

### Prerequisites

The project is configured to be built as Docker compositions, with several containers, so [Docker](https://www.docker.com/) is requisite, so it's docker-compose > 1.8.0.
A docker-compose config file is in root.
All other dependencies are loaded by Docker inside containers.

```
Docker
```

### Exposed Ports

Editing .env file we can choose what ports to use in our local machine.

- **Front:** 4200:4200
- **Back:** 3000:3000
- **DB:** 27017:27017

Configuration can be found in docker-compose.yml file.

### Installing

In Angular project you will find an enviroment config file that can be configured (if needed):

```
angular-client/src/env
```

In NodeJS project you will find an enviroment config file that can be configured too (if needed):

```
express-server/src/config/env
```

After Docker is installed, you just 'build' the images with docker-compose and run the containers:

```
docker-compose build
docker-compose up
```

### Enviroments

We have different enviroments "already done" configs for our libraries and applicattion.
The enviroment mode is taken from .env NODE_ENV. Docker must be restarted once changed to take effect on the deploy mode.

On 'development' mode, changes are binded with Nodemon, Webpack and Node while editing without any kind of Docker restart.

## Built With

- [Docker](https://www.docker.com/) - Deployment
- [NPM](https://www.npmjs.com/) - Dependency Management
- ...and more

* All dependencies and libraries can be found in both projects package.json config file.

## Versioning

1.0.0

## Authors

- **Juan Pons** - _Initial work_ - [juanitopons](https://github.com/juanitopons)

## License

Free to use project for learning purposes
