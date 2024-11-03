import { Categories } from '@app/shared-types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const values = Object.values(Categories);

  const categories = await Promise.all([
    ...values.map((name) =>
      prisma.category.upsert({
        where: { name },
        update: {},
        create: {
          name,
        },
      }),
    ),
  ]);

  const products = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Akara',
      description: 'Современный смартфон с большим экраном.',
      price: 29999,
      stock: 10,
      categoryId: 1,
    },
  });

  const images = await prisma.image.upsert({
    where: { id: 1 },
    update: {},
    create: {
      path: '/img/phone.jpg',
      productId: 1,
    },
  });

  const attrs = await prisma.attribute.upsert({
    where: { id: 1 },
    update: {},
    create: {
      attributeKey: 'Цвет',
      attributeValue: 'Черный',
      productId: 1,
    },
  });

  console.log(categories);
  console.log(products);
  console.log(images);
  console.log(attrs);
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
