# [START all]
FROM node:6-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --production
COPY index.js /app/index.js
EXPOSE 8080
CMD npm start
# [END all]