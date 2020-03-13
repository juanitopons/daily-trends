FROM node:latest
ARG SERVER_INTERNAL_PORT
RUN mkdir -p /usr/src/daily-trends-server
WORKDIR /usr/src/daily-trends-server
ENV PATH /usr/src/daily-trends-server/node_modules/.bin:$PATH
COPY . /usr/src/daily-trends-server
RUN npm --unsafe-perm=true install --silent
EXPOSE $SERVER_INTERNAL_PORT
CMD ["npm", "start"]