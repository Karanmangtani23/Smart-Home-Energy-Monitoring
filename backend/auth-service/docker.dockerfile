# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Set environment variables
ENV PORT=5001
ENV MONGO_URI=mongodb://mongo:27017/auth-service

# Expose the port
EXPOSE 5001

# Start the application
CMD ["node", "index.js"]
