import { BadRequestException } from '@nestjs/common';
import { Request } from 'express';

export const fileNameEditor = (
  req: Request,
  file: Express.Multer.File,
  cb: (err: Error, filename: string) => void,
) => {
  const newFileName = `product-${file.originalname}`;
  cb(null, newFileName);
};

export const imageFileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: (err: Error, valid: boolean) => void,
) => {
  console.log(file);
  if (
    !file.originalname ||
    !file.originalname.match(/\.(jpg|jpeg|png|webp|avif)$/)
  ) {
    return cb(
      new BadRequestException('File must b of type /.(jpg|jpeg|png|webp|avif'),
      false,
    );
  }

  return cb(null, true);
};
