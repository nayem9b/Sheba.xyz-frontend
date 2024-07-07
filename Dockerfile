FROM node:18-alpine

WORKDIR /myapp

COPY . . 
# all files are copied
# COPY package*.json ./
RUN npm install

RUN npm i yarn

EXPOSE 3000

CMD ["yarn", "run", "dev"]
