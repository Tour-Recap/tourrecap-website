# Stage 1: deps - install all dependencies for build
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: builder - build the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: runner - production image with prod deps only
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy package files and install prod dependencies only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built assets and config
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

# Cloud Run sets PORT env var
EXPOSE 3000
CMD ["sh", "-c", "npm run start -- -p ${PORT:-3000}"]
