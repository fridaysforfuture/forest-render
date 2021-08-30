FROM node:stretch-slim
WORKDIR /forest-render
COPY . .
RUN npm i
EXPOSE 3002

ENTRYPOINT [ "npm", "start" ]