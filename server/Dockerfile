# FROM node:19-bullseye AS Production
FROM node:latest

ENV NODE_ENV=production
WORKDIR /app
# COPY ./package.json ./
COPY package.json .


# COPY yarn.lock ./
COPY yarn.lock .

RUN npm install

COPY . .

# CMD ["npm", "run", "start"]
# CMD ["npm", "run", "start"]

# RUN npm run build

# CMD npm run start
CMD ["sh","-c", "npm run start"]

