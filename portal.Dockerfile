# BUILD STAGE
FROM node:12-alpine as builder

WORKDIR /home/angular

COPY --from=wishlist-packages /home/packages /home/angular/
COPY . /home/angular

RUN yarn build portal

# RUN STAGE
FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /home/angular/dist/apps/portal /usr/share/nginx/html
