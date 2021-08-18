FROM node:14.17.3

RUN mkdir /iranoan

WORKDIR  /iranoan

COPY ./yarn.lock /iranoan

RUN yarn install

COPY . /iranoan/

RUN yarn build

# CMD ["yarn", "start"]

CMD ["node_modules/.bin/next", "dev"]
