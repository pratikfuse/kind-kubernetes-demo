############################################
# Builder stage to build frontend web app  # 
############################################
FROM node:14 as webapp-builder

WORKDIR /build
COPY package.json package-lock.json ./
RUN ls
RUN npm install
COPY . .
RUN ls
RUN npm run build
RUN ls

#############################################
# NGINX container to serve web app          #
#############################################
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=webapp-builder /build/dist/web .
EXPOSE 80