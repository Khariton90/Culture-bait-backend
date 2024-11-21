import { join } from 'path';

export const FILE_UPLOAD_DIR = join(process.cwd(), process.env.FILE_UPLOAD_DIR);
export const FILE_TYPE_BAD_REQUEST_MESSAGE =
  'File must b of type /.(jpg|jpeg|png|webp|avif';

export const DEFAULT_PRODUCT_LIMIT = 12;
