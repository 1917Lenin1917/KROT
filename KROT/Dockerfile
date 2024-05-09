FROM node:latest
LABEL authors="lenin"

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-l", "5173", "-s", "dist"]
