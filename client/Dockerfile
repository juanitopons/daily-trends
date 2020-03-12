FROM node:latest
# RUN mkdir -p /usr/src/daily-trends-client
WORKDIR /usr/src/daily-trends-client
ENV PATH /usr/src/daily-trends-client/node_modules/.bin:$PATH
RUN npm install -g npm
# COPY package.json /usr/src/daily-trends-client
COPY . /usr/src/daily-trends-client
RUN npm --unsafe-perm=true install
# EXPOSE 4200
CMD ["npm", "start"]
