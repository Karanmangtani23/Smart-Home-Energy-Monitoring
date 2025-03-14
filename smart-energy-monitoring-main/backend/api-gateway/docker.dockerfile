# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy project files
COPY . .

# Set environment variables
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start the application
CMD ["node", "src/index.js"]
