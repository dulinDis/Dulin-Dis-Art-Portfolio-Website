# FROM node:19-bullseye AS Production
FROM node:latest

ENV NODE_ENV=production

# EXPOSE 80 

# LABEL version="1.0"
LABEL description="Production image for the Portfolio api"

WORKDIR /app
# COPY ./package.json ./
COPY package.json .


# COPY yarn.lock ./
COPY yarn.lock .

RUN npm install

COPY . .

# RUN npm run build

# CMD npm run start
CMD ["sh","-c", "npm run start"]

