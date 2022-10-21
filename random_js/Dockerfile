FROM node:19-buster-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5003

CMD ["node", "server.js"]