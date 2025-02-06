FROM node:18-alpine as builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
