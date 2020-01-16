# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 12 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
# 
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

## BUILDER STAGE ##
FROM node:12-alpine as builder

ENV NODE_ENV build

# USER node
WORKDIR /home/node

COPY --from=wishlist-packages /home/packages /home/node/
COPY . /home/node

RUN yarn build email-service --prod


## RUN STAGE ###
FROM node:12-alpine

# USER node
WORKDIR /home/node

# COPY --from=builder /home/node/package.json /home/node/yarn.lock /home/node/
COPY --from=builder /home/node/dist/apps/email-service /home/node/dist/

# RUN yarn install

CMD ["node", "dist/main.js"]