// Import packages
import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Setup Neon WebSocket
neonConfig.webSocketConstructor = ws;

// Connection string dari environment
const connectionString = process.env.DATABASE_URL!;

// Ini yang benar:
const adapter = new PrismaNeon({ connectionString });

// Prisma Client dengan adapter Neon
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
