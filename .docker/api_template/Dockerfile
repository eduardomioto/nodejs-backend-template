FROM node:20 as base

WORKDIR /home/node/app

COPY ./package .

RUN yarn install 

EXPOSE 8000

CMD [ "yarn", "dev" ]