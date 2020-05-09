FROM node:carbon
WORKDIR /app

COPY . .
RUN npm install

RUN npm run build
RUN npm -g install serve

CMD ["serve", "-s", "build", "-p", "6565"]
EXPOSE 6565
