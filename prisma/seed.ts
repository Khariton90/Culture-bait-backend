import { Categories } from '../libs/shared-types/src/categories.enum';
import { PrismaClient } from '@prisma/client';
import { generateMockProducts } from '../libs/core/src/helpers';
const prisma = new PrismaClient();

const mockProducts = generateMockProducts(40);

async function main() {
  const values = Object.values(Categories);

  const categories = await Promise.all([
    ...values.map((title) =>
      prisma.category.upsert({
        where: { title },
        update: {},
        create: {
          title,
        },
      }),
    ),
  ]);

  const products = await Promise.all([
    ...mockProducts.map((product) =>
      prisma.product.upsert({
        where: {
          code: product.code,
        },
        update: {},
        create: {
          ...product,
        },
      }),
    ),
  ]);

  const user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '89000000000',
      passwordHash: '123456',
      role: 'admin',
    },
  });

  console.log(user);
  console.log(categories);
  console.log(products);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
