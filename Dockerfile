FROM node:16.20.2

EXPOSE 3000

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --prod

COPY . .
RUN yarn build

CMD [ "yarn", "prod" ]