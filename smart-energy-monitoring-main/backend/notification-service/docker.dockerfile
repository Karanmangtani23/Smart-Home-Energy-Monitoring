# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy project files
COPY . .

# Set environment variables
ENV PORT=5004
ENV MONGO_URI=mongodb://mongo:27017/notifications

# Expose port
EXPOSE 5004

# Start the app
CMD ["node", "src/index.js"]
