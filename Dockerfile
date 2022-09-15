FROM node

WORKDIR /app

# RUN npm i -g create-react-app

COPY package.json .

RUN npm i --force

COPY . .

EXPOSE 3000

CMD ["npm" "start"]

