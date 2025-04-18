# my-chatbot/frontend/Dockerfile
FROM node:20.18.0

WORKDIR /app

# 複製 package.json / package-lock.json
COPY . .
RUN npm install -f

# 暴露端口 3000
EXPOSE 30001

# 啟動開發服務器
CMD ["npm", "run", "dev"]
