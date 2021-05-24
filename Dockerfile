FROM node:16.2.0-alpine3.13
ENV PORT=3001
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "npm-shrinkwrap.json*", "./"]
RUN yarn
COPY . .
EXPOSE 3001
ENV NODE_ENV=production
CMD ["yarn", "run", "dev:local"]
