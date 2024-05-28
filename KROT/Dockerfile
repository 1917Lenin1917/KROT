FROM node:latest
LABEL authors="lenin"

WORKDIR /app

COPY package.json ./
RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build

CMD ["serve", "-l", "5173", "-s", "dist"]
