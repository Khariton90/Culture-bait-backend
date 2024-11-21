import { SortDirection } from '@app/shared-types';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { ProductQuery } from 'src/product/query/product.query';
import { ProductRdo } from 'src/product/rdo/product.rdo';

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, {
    excludeExtraneousValues: true,
  });
}

export function getRandom<T>(arr: T[]) {
  return arr[Math.floor(arr.length * Math.random())];
}

export function generateMockProducts(num: number): ProductRdo[] {
  const arr = [];

  const titleList = ['Катушка', 'Спиннинг', 'Фидер', 'Оснастка', 'Одежда'];
  const descriptionList = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis`,
    'Lorem ipsum dolor sit amet consectetu',
    'Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetu',
    'Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetu',
  ];

  const ribbons = [false, true];

  const price = [2500, 10000, 20000, 40000, 500];
  const images = [
    'http://localhost:3000/product1.jpg',
    'http://localhost:3000/product2.jpg',
    'http://localhost:3000/product3.jpg',
  ];

  for (let i = 1; i <= num; i++) {
    const obj = {
      id: i,
      img: getRandom(images),
      title: getRandom(titleList),
      description: getRandom(descriptionList),
      price: getRandom(price),
      code: 505505 + i,
      isNew: getRandom(ribbons),
      isBestSeller: getRandom(ribbons),
      onSale: getRandom(ribbons),
      clearance: getRandom(ribbons),
      qty: 15,
      categoryId: 1,
    };

    arr.push(obj);
  }

  return arr;
}

export function getSkip(page: number, limit: number): number | undefined {
  return page > 0 ? limit * (page - 1) : undefined;
}

export function getByIdList(list: number[]): number[] | undefined {
  return list.length > 0 ? list : undefined;
}

export function getOrderBy(query: ProductQuery) {
  let orderBy: { [key: string]: SortDirection } = {};

  switch (query.sortBy) {
    case 'reviews':
      orderBy = { reviews: query.sortDirection };
      break;
    case 'popularity':
      orderBy = { popularity: query.sortDirection };
      break;
    case 'price':
      orderBy = { price: query.sortDirection };
      break;
    case 'rating':
      orderBy = { rating: query.sortDirection };
      break;
  }

  return orderBy;
}
