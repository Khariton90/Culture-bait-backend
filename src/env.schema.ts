import * as Joi from 'joi';

export default Joi.object({
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  PGADMIN_DEFAULT_EMAIL: Joi.string().required(),
  PGADMIN_DEFAULT_PASSWORD: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
  FILE_UPLOAD_DIR: Joi.string(),
});
