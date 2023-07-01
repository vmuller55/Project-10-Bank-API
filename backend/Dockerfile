FROM node:10 
WORKDIR /usr/src/app
COPY package.json .
RUN /usr/local/bin/npm install
COPY server/ .env swagger.yaml ./
EXPOSE 3001
CMD ["node", "./server.js"]
