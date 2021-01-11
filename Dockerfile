FROM node as build
WORKDIR /opt/project
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /opt/project/dist/sensor-viwer /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]