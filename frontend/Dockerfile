FROM node:22-alpine

WORKDIR /app

RUN npm install --global http-server

COPY . .

CMD ["http-server", ".", "--cors", "-e", "html", "-c-1"]
