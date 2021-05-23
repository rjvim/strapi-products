FROM strapi/base:alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

ENV NODE_ENV=production

COPY . .

RUN yarn run build

RUN apk --no-cache add curl

EXPOSE 1337

CMD [ "yarn", "run", "start" ]