User
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/app.js" ]