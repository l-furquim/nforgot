FROM node:18 AS builder

WORKDIR /app

COPY api/package*.json ./
COPY api/prisma ./prisma
COPY api/src ./src

RUN npm install

RUN npm run build

FROM node:18

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma


COPY api/package*.json ./
RUN npm install --production


EXPOSE 3333

CMD ["node", "dist/src/server.js"]
