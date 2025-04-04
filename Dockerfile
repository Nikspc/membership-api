FROM node:20 
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force && npm install --legacy-peer-deps || npm install --force
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]
