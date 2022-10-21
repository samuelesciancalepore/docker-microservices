FROM node:19-buster-slim

ADD . /random_js
WORKDIR /random_js

RUN npm install

EXPOSE 5003

CMD ["node", "server.js"]