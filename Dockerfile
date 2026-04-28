## Multi-stage Dockerfile for Vite React project
# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit --progress=false

# Copy the rest of the source code
COPY . .

# Build the production assets
RUN npm run build

# Stage 2: Serve the built assets with Nginx
FROM nginx:stable-alpine AS production

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
