version: '3.8'

services:
  mongo:
    image: mongo:7
    container_name: cinemagic-mongo
    restart: unless-stopped
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

  api:
    build: .
    container_name: cinemagic-api
    restart: unless-stopped
    depends_on:
      - mongo
    environment:
      MONGODB_URI: mongodb://mongo:27017/cinemagic
      PORT: 5000
      CORS_ORIGIN: "*"
    ports:
      - "5000:5000"

volumes:
  mongo-data:
