FROM node:14-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

ENV HOST 0.0.0.0

EXPOSE 5050

CMD ["npm", "run", "start"]