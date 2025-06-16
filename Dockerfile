FROM node:22

WORKDIR /app

COPY package*.json .
COPY fakeBackEnd/db.json .

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 3001

CMD ["npm", "run", "dev:all"]
