FROM node:18 AS builder

WORKDIR /app

# Copiar arquivos de configuração e código-fonte
COPY package*.json ./
COPY prisma ./prisma
COPY src ./src

# Instalar dependências
RUN npm install

# Construir o projeto
RUN npm run build

FROM node:18

WORKDIR /app

# Copiar arquivos do estágio de construção
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Instalar dependências de produção
COPY package*.json ./
RUN npm install --production

EXPOSE 3333

CMD ["node", "dist/src/server.js"]
