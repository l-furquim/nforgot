# Etapa 1: Construção
FROM node:18 AS builder

WORKDIR /app

RUN ls
RUN pwd

# Copiar os arquivos de configuração e os diretórios src e prisma (relativos à pasta "api")
COPY package*.json ./
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

# Instalar dependências de produção
COPY package*.json ./
RUN npm install --production

EXPOSE 3333

CMD ["node", "dist/src/server.js"]
