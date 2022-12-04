FROM node:19-bullseye AS builder

LABEL version="1.0"
LABEL description="React Frontent for portfolio page"
# FROM node:alpine
# ENV NODE_ENV=production
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN npm install
COPY . .
RUN npm run build

# FROM nginx:alpine
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html


# CMD ["nginx", "-g", "daemon off"]
# CMD ["sh","-c", "npm run start"]




# FROM node:19-bullseye as builder
# # WORKDIR /app
# WORKDIR /portfolio/src/client
# COPY ./package.json ./
# RUN npm i
# COPY . .
# RUN npm run build

# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html
