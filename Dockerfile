FROM node:12
WORKDIR /usr/src/node-clean-code-api
COPY ./package.json .
RUN npm install --only=prod
