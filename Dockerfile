# Use Node to build and serve the app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Vite app
RUN npm run build

# Install a lightweight HTTP server to serve static files
RUN npm install -g serve

# Expose port (optional, for reference)
EXPOSE 3000

# Start the server to serve the built app
CMD ["serve", "-s", "dist", "-l", "3000"]
