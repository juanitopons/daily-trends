FROM node:latest
ARG CLIENT_INTERNAL_PORT
RUN mkdir -p /usr/src/daily-trends-client
WORKDIR /usr/src/daily-trends-client
ENV PATH /usr/src/daily-trends-client/node_modules/.bin:$PATH
COPY . /usr/src/daily-trends-client
RUN npm --unsafe-perm=true install --silent
EXPOSE $CLIENT_INTERNAL_PORT
CMD ["npm", "start"]
