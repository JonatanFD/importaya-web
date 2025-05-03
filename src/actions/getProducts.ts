"use server";

import { PrismaClient } from '../../generated/prisma'

export async function getProducts() {
  const prisma = new PrismaClient();
  const products = await prisma.products.findMany();
  return products;
}
