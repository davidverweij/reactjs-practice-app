FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]