import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {  
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
      console.log("✅ Connected to MongoDB!");
  }
  prisma = global.prisma;
}

export { prisma };