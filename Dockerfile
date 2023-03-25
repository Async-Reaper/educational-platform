FROM node:18.0.0-alpine

WORKDIR ./ ./

COPY ./ ./

RUN yarn install

CMD ["yarn", "start:prod"]
