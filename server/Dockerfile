FROM node:latest
# RUN mkdir -p /usr/src/daily-trends-server
WORKDIR /usr/src/daily-trends-server
ENV PATH /usr/src/daily-trends-server/node_modules/.bin:$PATH
RUN npm install -g npm
COPY . /usr/src/daily-trends-server
RUN npm --unsafe-perm=true install
# EXPOSE 3000
CMD ["npm", "start"]