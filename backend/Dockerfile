FROM node:latest
LABEL authors="lenin"

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

CMD ["node", "index.js"]