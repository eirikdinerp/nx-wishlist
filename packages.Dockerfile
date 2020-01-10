# Install node_modules
FROM node:12-alpine as packages

WORKDIR /home/packages

COPY package.json yarn.lock ./
RUN yarn install