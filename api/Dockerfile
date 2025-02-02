# Etapa 1: Construção
FROM node:18 AS builder

WORKDIR /app

# Copiar arquivos essenciais (note que agora o tsconfig.json é copiado)
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Instalar dependências e construir o projeto
RUN npm install
RUN npm run build

# Etapa 2: Imagem final
FROM node:18

WORKDIR /app

# Copiar arquivos do estágio de construção
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Copiar novamente o package.json para instalar somente as dependências de produção
COPY package*.json ./
RUN npm install --production

EXPOSE 3333

CMD ["node", "dist/server.js"]
