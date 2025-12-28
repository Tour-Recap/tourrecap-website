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

# Build-time env vars for Next.js (NEXT_PUBLIC_* are baked into the bundle)
ENV NEXT_PUBLIC_PLAUSIBLE_DOMAIN=www.tourrecap.com

RUN npm run build

# Stage 3: runner - production image with prod deps only
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy package files and install prod dependencies only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built assets and config
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Set ownership and switch to non-root user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Cloud Run sets PORT env var
EXPOSE 3000
CMD ["sh", "-c", "npm run start -- -p ${PORT:-3000}"]
