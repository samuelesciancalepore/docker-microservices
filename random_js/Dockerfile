FROM node:19-buster-slim

ADD . /random_js
WORKDIR /random_js

RUN npm install

EXPOSE 5002

CMD ["node", "server.js", "--host=0.0.0.0", "--port=5002"]